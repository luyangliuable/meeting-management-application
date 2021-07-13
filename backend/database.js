const mongoose = require("mongoose");
const database = "mongodb+srv://jeremy-m001.heodx.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "mongo db connection error:"));

module.exports = db;