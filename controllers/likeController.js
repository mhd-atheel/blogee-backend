const Like = require("../models/likeModel");
const Post = require("../models/postModel");

const createLike = async (req, res) => {
  try {
    const { userid, postid } = req.body;

    const existingLike = await Like.findOne({ userid, postid });

    if (existingLike) {
      return res.status(400).json({ message: "User has already liked this post." });
    }

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

const deletelike = async (req,res) => {
  const { userid, postid } = req.body;
  try {
    // Find the like with the specified userid and postid
    const likeToDelete = await Like.findOne({ userid, postid });

    if (!likeToDelete) {
      return res.status(404).json({ message: "Like not found." });
    }

    // Delete the found like
    await likeToDelete.remove();

    return res.status(200).json({ message: "Like deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}




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
  deletelike
};
