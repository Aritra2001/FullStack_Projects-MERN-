import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true}));
app.use(cors());



const CONNECTION_URL = 'mongodb+srv://fullstackbeginer:fullstackbeginer123@cluster0.44oyjue.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true}) //connecting to the mongo server
    .then(() => app.listen(PORT, () => console.log(`Server running on Port : ${PORT}`)))  //if connection is successful then display the port number
    .catch((error) => console.log(error.message)); //if connection is not established then show error message

//mongoose.set('useFindAndModify', false);

