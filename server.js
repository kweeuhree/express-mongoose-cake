const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const cakeRouter = require('./routes/cakeRouter');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect to database
connectToDb();

//routing
app.use('/cakes', cakeRouter);

//listen
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
});