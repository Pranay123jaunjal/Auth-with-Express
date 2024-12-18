const mongoose = require('mongoose');
require("dotenv").config()

exports.connect = () => {
    mongoose.connect('mongodb+srv://Pranayjaunjal:pranayDbpassword@cluster0.fre8t0v.mongodb.net/NewTestAuthDb',{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Database Connection established")
    })
    .catch((err) => {
        // console.error(err)
        console.log("Connection Issues with Database");
        process.exit(1);
    })
}