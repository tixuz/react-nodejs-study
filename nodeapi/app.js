const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this World');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Node JS is listening to the port ${port}`);
});