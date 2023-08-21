const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

const createComment = async (req, res) => {
    try {
      const { comment,userid, postid } = req.body;
      
      const newComment = new Comment({
        comment,
        userid,
        postid,
      });
      const comments = await newComment.save();
      const foundPost = await Post.findOne({ _id: postid });
      const commentCounts = await foundPost.commentcount;
    //console.log("Like count:", likeCount)
      await Post.findByIdAndUpdate(
      postid,
      { $set: { commentcount: commentCounts + 1 } },
      { new: true }
    );
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports={
    createComment
}