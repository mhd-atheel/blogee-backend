const Post = require("../models/postModel");
const Like = require("../models/likeModel");
const User = require("../models/userModel");


const createPost = async (req, res) => {
  try {
    const { postname, location, imageUrl, userid } = req.body;

    const newPost = new Post({
      postname,
      location,
      imageUrl,
      userid,
    });
    const post = await newPost.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getpost = async (req, res) => {
  try {
    const { type } = req.body;
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStartOfDay = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
    const yesterdayEndOfDay = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() + 1);
    const startOfDay = new Date( today.getFullYear(),today.getMonth(),today.getDate());
    const endOfDay = new Date(today.getFullYear(),today.getMonth(),today.getDate() + 1);
    if (type === "all") {
      const posts = await Post.find({})
      .populate('userid', 'username email imageUrl')
      .exec();

    const formattedPosts = posts.map(post => ({
      _id: post._id,
      postname: post.postname,
      location: post.location,
      likecount: post.likecount,
      commentcount: post.commentcount,
      userid: post.userid._id,
      username: post.userid.username,
      email: post.userid.email,
      createdAt: post.createdAt,
      userprofileimage:post.userid.imageUrl || null,
      postimage:post.imageUrl || null,
    }));
    res.status(200).json(formattedPosts);

    } else if (type === "today") {

      // Retrieve posts for today from the database
      const posts = await Post.find({
        createdAt: { $gte: startOfDay, $lt: endOfDay },
      });


      res.status(200).json(posts);

    }else if (type === 'yesterday') {
       
        // Retrieve posts for yesterday from the database
        const posts = await Post.find({
          createdAt: { $gte: yesterdayStartOfDay, $lt: yesterdayEndOfDay },
        });
        res.status(200).json(posts);
      } 
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createPost,
  getpost,
};
