const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// A post should have a user
const PostSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  caption: { type: String, required: true },
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model('Post', PostSchema);
