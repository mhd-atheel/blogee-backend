const  mongoose  = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        validate: {
          validator: (value) => {
            // Use a regular expression to validate the email formats
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email format',
        },
      },
      password: {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            // Check if the password is at least 8 characters long and contains at least one special character
            return /^(?=.*?[!@#$%^&*()_+-=])(?=.*?[A-Za-z]).{8,}$/.test(value);
          },
          message: 'Password must be at least 8 characters long and contain at least one special character',
        },
      },
      imageUrl: String, 
      bio: {
        type: String,
        required: false,
    },

},{timestamps:true})

const user= mongoose.model('Users',userSchema)

module.exports =user