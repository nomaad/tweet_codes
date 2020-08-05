// Importing required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from 'winston';
import mongoose from'mongoose';
let config = require('./config/config');

// Defining port
const port = process.env.PORT || 9000;

// Defining app
const app = express();

// Defining middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'html');

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining the Routes
app.use('/api', require('./routes/index'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
