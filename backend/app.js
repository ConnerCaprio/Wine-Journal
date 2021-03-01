const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Content-Type, Accept');
   res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

/* app.use((req, res, next) => {
  console.log('first app.use method');
  next(); //goes to next app.use method
}); */

app.use('/api/posts', (req, res, next) => {
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
    }
  ];
  res.status(200).json({
    message: 'wines fetched successfully',
    wines: wines}); //must send response or will get infinite load in browser
});

module.exports = app;
