const express = require("express");

const app = express();

app.get('/', (req,res) => {
    res.send('Hi from the app!')
});

const port = 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}.`))
