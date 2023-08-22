const mongoose = require("mongoose");

const savePostSchema = mongoose.Schema({
  
  userid: {
    type :mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  postid: {
    type :mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
  },
},{timestamps:true});

const savePost = mongoose.model("Saved", savePostSchema);

module.exports = savePost;