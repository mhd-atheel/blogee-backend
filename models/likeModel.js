const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  
  userid: {
    type :mongoose.Types.ObjectId,
    required:true,
  },
  postid: {
    type :mongoose.Types.ObjectId,
    required:true
  },
},{timestamps:true});

const like = mongoose.model("Likes", likeSchema);

module.exports = like;
