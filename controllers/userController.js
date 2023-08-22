const User = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { username, email, password, imageUrl } = req.body;
    const existEmail = await User.findOne({ email });

    if (existEmail) {
      res.status(409).json({ message: "email already exist" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // const decodedImage = Buffer.from(ImageData,'base64')

    // const result = await cloudinary.uploader.upload(decodedImage);

    const newuser = new User({
      username,
      email,
      password: hashedPassword,
      imageUrl,
    });
    const user = await newuser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(200).json({ message: "email not found" });
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      res.status(200).json({ message: "wrong password" });
    }
    // const formatedUser = user.map(e =>({
    //   _id: e._id,
    //   postname: e.username,
    //   location: e.email,
    //   likecount: e.password,
    // }
    // ))

    res.status(200).json({
      _id: user._id,
      postname: user.username,
      location: user.email,
      imageUrl: user.imageUrl || null,
      bio: user.bio || null,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsers = async (req,res)=>{
    try {
      const users = await User.find()
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
}

module.exports = {
  createUser,
  loginUser,
  getUsers
};
