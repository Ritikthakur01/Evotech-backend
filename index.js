import express from "express"
import db from "./config/mongoose.js"
import router from "./router/index.js"
import cors from 'cors';
import csurf from '@dr.pogodin/csurf';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import 'dotenv/config';
  

const app = express()

app.use(express.json()) 
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));



// app.use(csurf());

// app.use((req, res, next) => {
//     const csrfToken = req.csrfToken();
//     res.cookie('XSRF_TOKEN', csrfToken, { maxAge: 900000, httpOnly: true });

//     console.log('Received CSRF Token:', req.headers['x-csrf-token']);
//     console.log('Generated CSRF Token:', req.csrfToken());
    
//     next();
// });


app.use("/", router)


app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})