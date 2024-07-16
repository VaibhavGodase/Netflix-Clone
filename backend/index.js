import express from "express"
import dotenv from "dotenv";
import databaseconnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors"



dotenv.config({ path: ".env" })

databaseconnection()





const app = express()

//middlewares 

// use to encode the data send from the form input so server can understand , for more information read express and monogdb Data transfer file in FSD Notes folder in computer.
app.use(express.urlencoded({ extended: true }));


// use to conver json data into object
app.use(express.json());

// use to get cookie from browser
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));





// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`listening at port ${process.env.PORT}`);

})