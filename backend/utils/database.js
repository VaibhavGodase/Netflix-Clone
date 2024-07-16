import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
})

const databaseconnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDB connected successfully");

    }).catch((error) => {
        console.log(error);

    })
}

export default databaseconnection