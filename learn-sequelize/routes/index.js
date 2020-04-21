var express = require('express');
var User = require('../models').User;

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next)  => {
  //async await
  try{
    const users = await User.findAll();
    res.render('sequelize',{ users })
  }catch (e) {
    console.error(e)
    next(e);
  }

  //promise
  // User.findAll()
  //     .then((users) =>{
  //       res.render('sequelize',{users})
  //     })
  //     .catch((err) =>{
  //       console.error(err)
  //       next(err)
  //     })
});

module.exports = router;
