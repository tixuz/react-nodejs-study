const express = require('express');
const app = express();


//routes

// const postRoutes = require('./routes/posts');
// const getPosts = postRoutes.getPosts;

const { getPosts } = require('./routes/posts');


app.get('/', getPosts);


const port = 3000;
app.listen(port, () => {
    console.log(`Node JS is listening to the port ${port}`);
});