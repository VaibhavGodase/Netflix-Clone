import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({

    fullName: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },

},
    // means when you add {timestamps:true} ,  the 'createdAt' field add to document in mondb which shows timestamp of document created time and date
    { timestamps: true })


export const User = Mongoose.model("User", userSchema);