import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
 

// Allow requests from http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json( { limit: "16kb" } ));
app.use(express.urlencoded( { extended: true, limit: "16kb" } ));
app.use(express.static("public"));
app.use(cookieParser());


import userRoute from "./routes/user.routes.js"


app.use("/api/v1/users",userRoute);

//   http://localhost:8000/api/v1/users/Register


export { app };