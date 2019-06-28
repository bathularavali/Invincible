const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');
const upload = require('../gridfs');

// @route GET /
// @desc test endpoint
router.get('/api/test', (req, res) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    caption: 'Test caption',
    image: 'Test image path'
  });
  post
    .save()
    .then(result => {
      res.status(200).json({
        caption: result.caption,
        image: result.image
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/post', upload.single('file'), (req, res) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    caption: req.body.caption,
    image: `image/${req.file.filename}`
  });
  console.log(req.body.caption);
  console.log('Post created');
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Created post successfully',
        createdPost: {
          _id: result._id,
          caption: result.caption,
          image: result.image
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/file/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, image) => {
    if (!image || file.length === 0) {
      res.status(404).json({
        err: "file doesn't exist"
      });
    }
    res.json(image);
  });
});

// @route GET /image/:filename
// @desc Display image
router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, image) => {
    // Check if file
    if (!image || image.length === 0) {
      return res.status(404).json({
        err: 'No file exist'
      });
    }

    // Check if image
    if (
      image.contentType === 'image/jpeg' ||
      image.contentType === 'image/png'
    ) {
      // Read output to browser
      const readstream = gfs.createReadStream(image.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

// @route DELETE /files/:id
// @desc Delete file
router.delete('/files/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    res.redirect('/');
  });
});

module.exports = router;
