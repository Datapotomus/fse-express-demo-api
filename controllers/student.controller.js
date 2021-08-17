const studentController = {
  
  findAll: (req, res) => {
    res.send('you have reached the controller method to return all students')
  }
}

module.exports = studentController;