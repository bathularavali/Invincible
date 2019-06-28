const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const router = express.Router();

const Post = require('./models/post');

// Mongo URI
const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/invincible';

// Create mongo connection
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
conn = mongoose.connection;

// Init gfs
let gfs;
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('posts');
});

// Create file storage strategy
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017/invincible',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'posts'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// @route GET /posts
// @desc get all posts
router.get('/', (req, res) => {
  Post.find()
    .select('_id caption imagePath')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            _id: doc._id,
            caption: doc.caption,
            imagePath: doc.imagePath
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// @route Post /posts/create
// @desc get all posts
router.post('/create', upload.single('file'), (req, res) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    caption: req.body.caption,
    imagePath: `image/${req.file.filename}`
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Created post successfully',
        createdPost: {
          _id: result._id,
          caption: result.caption,
          imagePath: result.imagePath
        }
      });
    })
    .catch(err => {
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

// @route GET /posts/image/:filename
// @desc Display image
router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, image) => {
    // Check if file
    if (!image || image.length === 0) {
      res.status(404).json({
        err: 'No file exists'
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

// @route DELETE posts/files/:id
// @desc Delete file
router.delete('/files/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      res.status(404).json({ err: err });
    }
    res.redirect('/');
  });
});

module.exports = router;
