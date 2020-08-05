import express from 'express';
const router = express.Router();

// Student model
let TweetModel = require('../models/tweet_schema.js');

// Find all tweets
router.route('/').get((req, res) => {
    TweetModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

// Find random tweet
router.route('/random-tweet').get((req, res) => {
  // Get the count of all users
  TweetModel.count().exec(function (err, count) {
    console.log(count)
    // Get a random entry
    var random = Math.floor(Math.random() * count)
    console.log("Random:" + random)
    // Again query all users but only fetch one offset by our random #
    TweetModel.findOne().skip(random).exec(
      function (error, result) {
        if (error) {
          console.log(error)
          //return next(error)
        } else {
          console.log(result)
          res.json(result)
        }
      })
  })
})

// Find tweet by ID
router.route('/find-one').get((req, res) => {
  //res.json({foo:"bar"})
   TweetModel.findOne((error, data) => {
    if (error) {
      console.log(error)
      //return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// Find tweet by ID
router.route('/edit-tweet/:id').get((req, res) => {
  //res.json({foo:"bar"})
   TweetModel.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error)
      //return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update tweet
router.route('/update-tweet/:id').post((req, res, next) => {
  TweetModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Tweet successfully updated!')
    }
  })
})

module.exports = router;
