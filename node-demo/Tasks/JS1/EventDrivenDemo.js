var express = require("express");
var app = express();
var port = 3000;

app.use("/", (req, res) => {



    console.log("Hello testing");
    res.sendFile("F:/Visual Labs/VL/MeanStack/Tasks"+"/eventdriven.html");

    console.log("Path Correct");

});

app.listen(port, () => {

    console.log("Listening at:" + port);

});
