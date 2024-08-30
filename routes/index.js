const express = require('express');
const router = express.Router();
const index_controller = require('../controller/indexController');

/* GET home page. */
router.get('/', index_controller.index_get);

/* GET form page */
router.get('/new', index_controller.form_get);

/* POST form page*/
router.post('/new', index_controller.form_post);

module.exports = router;
