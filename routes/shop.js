const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData=require('./admin')
const router = express.Router();

router.get('/', (req, res, next) => {
  //console.log('shopjs',adminData.products)
  const products=adminData.products
  
  res.render('shop',{data:products,docTitle:'Shop'})
  console.log(products[0].title)
 // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
