const asyncHandler = require('express-async-handler');

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
];

// Get messages to display on homepage
exports.index_get = asyncHandler(async (req, res, next) => {
  res.render('index', 
    { 
      title: 'Mini Message Board', 
      messages: messages 
    });
});

// GET form page
exports.form_get = asyncHandler(async (req, res, next) => {
  res.render('form', 
    { 
      title: 'New Message' 
    }
  );
});

// POST from page

exports.form_post = asyncHandler(async (req, res, next) => {
  messages.push(
    { 
      text: req.body.newMessage, 
      user: req.body.userName, 
      added: new Date() 
    }
  );
  res.redirect('/');
});