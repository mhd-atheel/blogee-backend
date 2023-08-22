const Saved = require("../models/savePostModel");

const savePost = async (req, res) => {
    try {
      const { userid, postid } = req.body;
  
      const newSaved = new Saved({
        userid,
        postid,
      });
      const saved = await newSaved.save();
      
     
      res.status(200).json(saved);
    } catch (error) {
      res.status(500).json(error);
    }
  };


module.exports={
    savePost
}