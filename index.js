strict = true;


const express = require("express");
// another way: import express from "express";

require("dotenv").config();

// app contains different functionalities and methods which give various options
const app = express();

// const port = 3000;
const port = process.env.PORT;

// listen to / and send response
app.get("/", (req, res) => {
    res.send("Hello from home!");
});

app.get("/twitter", (req, res) => {
    res.send("Hello from twitter!");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please login!</h1>");
})

// to listen to different events on the same port
app.listen(port, () => {
    console.log(`Backend application is started on port ${port}`);
});