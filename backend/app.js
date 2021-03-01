const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Wine = require('./models/wine');

const app = express();

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

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Content-Type, Accept');
   res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post("/api/posts", (req, res, next) => {
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
    picName: req.body.picName
  });
  post.save();
  console.log('CAUGHT A POST REQUEST: ' + post);
  res.status(201).json({message: 'got it successfully'});
});

app.get('/api/posts', (req, res, next) => {
  Wine.find()
    .then(documents => {
      res.status(200).json({
        message: 'wines fetched successfully',
        wines: documents}); //must send response or will get infinite load in browser
    });
   //can do searching and narrow down here. in mongoose docs


});

module.exports = app;


/*
const wines = [
    {
      id: 1,
      name: 'rubus',
      content:'coming from server',
      type: 'red',
      terroir: 'cali',
      year: 2017,
      rating: 91,
      price: 12,
      notes: 'twas good and cool',
      variety: 'blend',
      alcPercent: 11,
      picName: 'wine.png'
    },
    {
      id: 1,
      name: 'espania',
      content:'coming from server',
      type: 'red',
      terroir: 'spain',
      year: 2009,
      rating: 95,
      price: 13,
      notes: 'best spanish wine not spicy',
      variety: 'Tempranillo',
      alcPercent: 12,
      picName: 'wine2.jpg'
    },
    {
      id: 3,
      name: 'bitches',
      content:'coming from server',
      type: 'white',
      terroir: 'my butt',
      year: 6969,
      rating: 69,
      price: 69,
      notes: 'uber thicc',
      variety: 'hoes',
      alcPercent: 69,
      picName: 'wine2.jpg'
      ];
    }
*/
