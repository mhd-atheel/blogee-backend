const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment: {
      type:String,
      required: true,
    },
    userid: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    postid: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = commentModel;
