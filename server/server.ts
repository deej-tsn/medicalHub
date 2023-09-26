require('dotenv').config()

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('./utils/jwt');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error : any) => console.log(error));
db.once('open', () => console.log("Connected to Server"));

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

// ROUTERS

const triggersRouter = require('./routes/triggers');
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.use('/triggers', triggersRouter);

// ROUTES

app.get("/", jwt.authenticateToken, (req : any, res : any) => {
    res.send(res.user);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})