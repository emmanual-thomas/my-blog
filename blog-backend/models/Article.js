const mong = require('mongoose');

const articleschem = new mong.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now }
});

module.exports = mong.model('Article', articleschem);
