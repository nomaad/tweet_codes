import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  usernameTweet: {
    type: String
  },
  ID: {
    type: String
  },
  text: {
    type: String
  },
  url: {
    type: String
  },
  nbr_retweet: {
    type: Number
  },
  nbr_favorite: {
    type: Number
  },
  nbr_reply: {
    type: Number
  },
  datetime: {
    type: String
  },
  is_reply: {
    type: Boolean
  },
  is_retweet: {
    type: Boolean
  },
  user_id: {
    type: String
  },
  code: {
    type: Number
  },
}, {
  collection: 'tweet'
})

module.exports = mongoose.model('Tweet', tweetSchema)
