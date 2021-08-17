const express = require('express');
const router = express.Router();

//Call to get all the users
router.get('/students', (req, res) => {
  res.send('This is the default student route')
})

module.exports = router;