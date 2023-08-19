const Like = require("../models/likeModel");

const createLike = async (req, res) => {
    try {
      const { userid } = req.body;
  
      const newLike = new Like({
        userid,
      });
      const like = await newLike.save();
  
      res.status(200).json(like);
    } catch (error) {
      res.status(400).json(error);
    }
  };


module.exports={
    createLike
}