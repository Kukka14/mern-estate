import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(process.env.MANGODB).then( () => {
    console.log('Connected to MangoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();

 app.listen(3000, ()=> {
     console.log('Server is running on port 300'); 
 }
);