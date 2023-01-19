require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const homeRouter = require('./routes/homeRouter')
const loginRouter = require('./routes/loginRouter')

const app = express();
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));

app.set("view engine", "ejs");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/dotDB').catch(err => console.log(err));

app.use('/login', loginRouter);
app.use('/', homeRouter)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
    console.log("Server has started successfully.");
});