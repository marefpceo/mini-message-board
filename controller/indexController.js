const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const db = require('../db/queries');


// Get messages to display on homepage
exports.index_get = asyncHandler(async (req, res, next) => {
  const messages = await db.getAllMessages();
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
exports.form_post = [
  body('userName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long')
    .escape(),
  body('newMessage')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long')
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.render('form', {
        title: 'New Message',
        userName: req.body.userName,
        newMessage: req.body.newMessage,
        errors: errors.array(),
      });
      return;
    } else {
        await db.createNewMessage(req.body.userName, req.body.newMessage);
        res.redirect('/');
    }
})];