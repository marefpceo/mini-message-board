const asyncHandler = require('express-async-handler');
const db = require('../db/queries');


// Get messages to display on homepage
exports.index_get = asyncHandler(async (req, res, next) => {
  const messages = await db.getAllMessages();
  console.log(messages);
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