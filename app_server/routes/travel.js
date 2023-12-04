const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET homepage */
router.get('/', controller.travelList);

module.exports = router;