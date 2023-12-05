import express from 'express'
import _ from './config/config.js'
import cors from 'cors';
import morgan from 'morgan';
import authRoute from './routes/auth.route.js'
import todoRoute from './routes/todos.route.js'
const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/todos',todoRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server listen at http://127.0.0.1:${process.env.PORT}`);
 })