const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  imageUrl: String,
  
  userid: {
    type :mongoose.Types.ObjectId,
    required:true
  },
},{timestamps:true});

const post = mongoose.model("Posts", postSchema);

module.exports = post;
