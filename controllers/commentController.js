const Comment = require("../models/commentModel");

const createComment = async (req, res) => {
    try {
      const { comment,userid, postid } = req.body;
  
      const newComment = new Comment({
        comment,
        userid,
        postid,
      });
      const comments = await newComment.save();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports={
    createComment
}