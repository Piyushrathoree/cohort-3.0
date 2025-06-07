const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World , I&aposm doing this using docker  , here i made my first change');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});