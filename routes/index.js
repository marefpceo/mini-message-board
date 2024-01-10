const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET form page */
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

/* POST form page*/
router.post('/new', (req, res, next) => {
  messages.push(
    { 
      text: req.body.newMessage, 
      user: req.body.userName, 
      added: new Date() 
    }
  );
  res.redirect('/');
});

module.exports = router;
