const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('DB Connected'));


mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

//routes
const postRoutes = require("./routes/post");

//middlewares
app.use(bodyParser.json());
//this is to parse the post into json

app.use(morgan("dev"));
//this is to show get/post status

app.use(expressValidator());
//validation of api input data

app.use('/', postRoutes);
//this is for routes


const port = process.env.PORT; //.env
app.listen(port, () => {
    console.log(`Node JS is listening to the port ${port}`);
});