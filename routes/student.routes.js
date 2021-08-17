const express = require('express');
const studentController = require('../controllers/student.controller');
const router = express.Router();

//Call to get all the users
router.get('/students', studentController.findAll)

module.exports = router;