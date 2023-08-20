const express = require('express')
const dotenv = require('dotenv')
const  mongoose  = require('mongoose')
const userRouter= require('./routes/userRouter.js')
const postRouter= require('./routes/postRoute.js')
const LikeRouter= require('./routes/likeRoute.js')
const CommentRouter= require('./routes/commentRoute.js')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.PORT
const url = process.env.MONGO_URI


app.listen(port ,()=>{

    console.log(`Successfully connected ${port}`);
})

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
    ()=>{
        console.log(`Database Successfully connected `);
    }
).catch(()=>{console.log('Database NOT CONNECTED');})


app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use('/api/likes',LikeRouter)
app.use('/api/comments',CommentRouter)

