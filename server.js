const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = require('./config/connectToDb');
//middleware

//connect to database
connectToDb();

//routing

//listen
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
});