const express = require('express');
const studentController = require('../controllers/student.controller');
const router = express.Router();

//Call to get all the users
router.get('/students', studentController.findAll)

//Get specific students
router.get('/students/:id', studentController.findById)

module.exports = router;