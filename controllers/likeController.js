const Like = require("../models/likeModel");
const Post = require("../models/postModel");

const createLike = async (req, res) => {
  try {
    const { userid, postid } = req.body;

    const newLike = new Like({
      userid,
      postid,
    });
    const like = await newLike.save();
    const foundPost = await Post.findOne({ _id: postid });
    const likeCounts = await foundPost.likecount;
    //console.log("Like count:", likeCount)
    await Post.findByIdAndUpdate(
      postid,
      { $set: { likecount: likeCounts + 1 } },
      { new: true }
    );

    res.status(200).json(like);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getLikeById = async (req, res) => {
  try {
    const id = req.params.id;
    const like = await Like.findById(id);
    res.status(200).json(like);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createLike,
  getLikeById,
};
