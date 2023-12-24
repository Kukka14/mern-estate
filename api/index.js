import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();
import authRouter from './routes/auth.route.js';

mongoose.connect(process.env.MANGODB).then( () => {
    console.log('Connected to MangoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json());

 app.listen(3000, ()=> {
     console.log('Server is running on port 3000'); 
 }
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Eroor';
    return res.status(statusCode).json( {
        success: false,
        statusCode,
        message
    });
});