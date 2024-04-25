//require env
require('dotenv').config();

//require url
const DB_URL = process.env.DB_URL;

//require mongoose
const mongoose = require('mongoose');


//connect to db
const connectToDb = async () => {
    await mongoose.connect(DB_URL);
    console.log('konnekted to kluster');
}

//export
module.exports = connectToDb;