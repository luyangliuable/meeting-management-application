const express = require("express");
const app = express();

const port = 8081;

// Setup database
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const database = "mongodb://root:example@mongo:27017";
mongoose.connect(database, { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => console.log("Mongo Error"));

// Initialise Middleware
app.use(express.json());

const cors = require("cors");
app.options('*', cors())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/', (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log("App running on port " + port);
});

const meetingsRouter = require("./routes/meetings");
app.use('/meeting/', meetingsRouter);

const personRouter = require('./routes/personRouter')
app.use('/person/', personRouter);

module.export = app;