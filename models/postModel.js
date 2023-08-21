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
    type :mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  likecount: {
    type :Number,
    default:0
  },
  commentcount: {
    type :Number,
    default:0
  },
},{timestamps:true});

const post = mongoose.model("Posts", postSchema);

module.exports = post;
