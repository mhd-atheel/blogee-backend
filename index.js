const express = require('express');
const dotenv = require('dotenv');
const socketIo = require('socket.io');
const http = require('http');
const  mongoose  = require('mongoose');
const userRouter= require('./routes/userRouter.js');
const postRouter= require('./routes/postRoute.js');
const LikeRouter= require('./routes/likeRoute.js');
const CommentRouter= require('./routes/commentRoute.js');
const SavedRouter= require('./routes/savePostRouter.js');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT
const url = process.env.MONGO_URI

// const Message = mongoose.model('Message', {
//     text: String,
//     user: String,
//   });

//   io.on('connection', (socket) => {
//     console.log('A user connected');
//     console.log(socket.id);
//     // // Handle custom events
//     // socket.on('chat message', (message) => {
//     //   console.log('Received message:', message);
  
//     //   // Save the message to MongoDB
//     //   const newMessage = new Message(message);
//     //   newMessage.save().then(() => {
//     //     // Broadcast the message to all connected clients
//     //     io.emit('chat message', message);
//     //   });
//     // });
  
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

app.listen(port ,()=>{

    console.log(`Successfully connected ${port}`);
})

mongoose.set('strictQuery', false);
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
app.use('/api/saved',SavedRouter)

