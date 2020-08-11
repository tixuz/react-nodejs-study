const express = require('express');
const app = express();
const morgan = require('morgan');

// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true,
            useUnifiedTopology: true}
)
    .then(() => console.log('DB Connected'))


mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//routes
// const postRoutes = require('./routes/posts');
// const getPosts = postRoutes.getPosts;
// const { getPosts } = require('./routes/posts');

const postRoutes = require("./routes/posts")

//middleware
app.use(morgan("dev"));

// const myOwnMiddleware = (req, res, next) => {
//     console.log("I'm a middleware!!");
//     next();
// }
//
// app.use(myOwnMiddleware);
//
// app.get('/', getPosts);

app.use('/',postRoutes);

const port =  process.env.PORT; //.env
app.listen(port, () => {
    console.log(`Node JS is listening to the port ${port}`);
});