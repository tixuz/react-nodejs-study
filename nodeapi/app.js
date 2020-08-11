const express = require('express');
const app = express();
const morgan = require('morgan');

//routes
// const postRoutes = require('./routes/posts');
// const getPosts = postRoutes.getPosts;
const { getPosts } = require('./routes/posts');

//middleware
app.use(morgan("dev"));

const myOwnMiddleware = (req, res, next) => {
    console.log("I'm a middleware!!");
    next();
}

app.use(myOwnMiddleware);

app.get('/', getPosts);


const port = 3000;
app.listen(port, () => {
    console.log(`Node JS is listening to the port ${port}`);
});