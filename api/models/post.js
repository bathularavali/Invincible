const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  caption: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Post', PostSchema);
