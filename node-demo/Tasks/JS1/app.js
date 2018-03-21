/*
 * Filename: f:\Visual Labs\VL\node-demo\app.js
 * Path: f:\Visual Labs\VL\node-demo
 * Created Date: Monday, March 19th 2018, 4:55:44 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */


var express = require("express");
var app = express();
var port = 3000;

app.use("/", (req, res) => {



    console.log("Hello testing");
    res.sendFile("/Visual Labs/VL/node-demo" +"/index.html");

    console.log("Path Correct");

});

app.listen(port, () => {

    console.log("Listening at:" + port);

});
