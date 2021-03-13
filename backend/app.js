const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

const Wine = require('./models/wine');

const app = express();

const MINE_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
};

var currentExt = 'jpg';
var currentDate = ''; //needed this because the mongo name and the file name were off by like .0003 seconds

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MINE_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null
    }
    cb(error, "src/assets/images")
  },
  filename: (req, file, cb) => {
    const imageNameWithoutExtension = file.originalname.split('.');
    const imageName = imageNameWithoutExtension[0].toLowerCase().split(' ').join('-');
    currentExt = MINE_TYPE_MAP[file.mimetype];
    currentDate = Date.now();
    cb(null, imageName + '-' + currentDate + '.' + currentExt);
  }
});

mongoose.connect("mongodb+srv://Conner:sPk1zfocah3jm1M8@cluster0.b9zfy.mongodb.net/wine-Journal-Database?retryWrites=true&w=majority")
.then(() => {
  console.log('connected to mongo db');
})
.catch(() => {
  console.log('connection to mongodb failed');
});

//sPk1zfocah3jm1M8

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Content-Type, Accept');
   res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});



app.post("/api/posts", multer({storage: storage}).single("image"), (req, res, next) => { //ADDING A WINE
  var picNameEdited = req.body.picName + '-' + currentDate + '.' + currentExt;
  console.log('HERE IS THE EDITED PIC NAME: ' + picNameEdited);
  const post = new Wine({
    name: req.body.name,
    type: req.body.type,
    rating: req.body.rating,
    content: req.body.content,
    year: req.body.year,
    price: req.body.price,
    notes: req.body.notes,
    variety: req.body.variety,
    alcPercent: req.body.alcPercent,
    terroir: req.body.terroir,
    picName: picNameEdited
  });
  post.save();
  console.log('CAUGHT A POST REQUEST: ' + post);
  res.status(201).json({message: 'got it successfully'});
});

app.get('/api/posts/', (req, res, next) => {
  Wine.find()
    .then(documents => {
      res.status(200).json({
        message: 'wines fetched successfully',
        wines: documents}); //must send response or will get infinite load in browser
    });
   //can do searching and narrow down here. in mongoose docs


});

app.get('/api/posts/red', (req, res, next) => {
  Wine.find({type: 'Red'})
    .then(documents => {
      res.status(200).json({
        message: 'wines fetched successfully',
        wines: documents}); //must send response or will get infinite load in browser
    });
   //can do searching and narrow down here. in mongoose docs


});

app.get('/api/posts/white', (req, res, next) => {
  Wine.find({type: 'White'})
    .then(documents => {
      res.status(200).json({
        message: 'wines fetched successfully',
        wines: documents}); //must send response or will get infinite load in browser
    });
   //can do searching and narrow down here. in mongoose docs


});

app.get('/api/posts/sparkling', (req, res, next) => {
  Wine.find({type: 'Sparkling'})
    .then(documents => {
      res.status(200).json({
        message: 'wines fetched successfully',
        wines: documents}); //must send response or will get infinite load in browser
    });
   //can do searching and narrow down here. in mongoose docs


});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;
