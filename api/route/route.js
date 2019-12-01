var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
var fs = require("fs");
var xml;
var parseString = require("xml2js").parseString;
var multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

var upload = multer({ storage: storage });

router.use(bodyparser.urlencoded({ extended: false }));

router.get("/", function(req, res) {
  res.sendFile(path.resolve("./html/index.html"));
});

router.get("/StreetBasketballGetXAML", (req, res) => {
  fs.readFile("./xml/StreetBasketballUpdate.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results

    xml = data;
    console.log(xml);
    // we then pass the data to our method here
    parseString(xml, function(err, result) {
      if (err) console.log(err);
      // here we log the results of our xml string conversion
      console.log(result);
      res.send(result);
    });
  });
});

router.get("/SuperBallGetXAML", (req, res) => {
  fs.readFile("./xml/SuperBallUpdate.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results

    xml = data;
    console.log(xml);
    // we then pass the data to our method here
    parseString(xml, function(err, result) {
      if (err) console.log(err);
      // here we log the results of our xml string conversion
      console.log(result);
      res.send(result);
    });
  });
});

router.get("/SuperHoopGetXAML", (req, res) => {
  fs.readFile("./xml/SuperHoopUpdate.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results

    xml = data;
    console.log(xml);
    // we then pass the data to our method here
    parseString(xml, function(err, result) {
      if (err) console.log(err);
      // here we log the results of our xml string conversion
      console.log(result);
      res.send(result);
    });
  });
});

router.get("/SuperPinballGetXAML", (req, res) => {
  fs.readFile("./xml/SuperPinballUpdate.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results

    xml = data;
    console.log(xml);
    // we then pass the data to our method here
    parseString(xml, function(err, result) {
      if (err) console.log(err);
      // here we log the results of our xml string conversion
      console.log(result);
      res.send(result);
    });
  });
});

router.post("upload", upload.single("myfile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload file!");
  }
  res.send(file);
});

module.exports = router;
