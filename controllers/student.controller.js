const students = [
  {
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "major": "Biology",
    "ip_address": "26.58.193.2"
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "major": "Religious Studies",
    "ip_address": "229.179.4.212"
  }, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "major": "Comp Sci",
    "ip_address": "180.66.162.255"
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "major": "Law",
    "ip_address": "67.76.188.26"
  }
]

const studentController = {
  
  findAll: (req, res) => {
    res.json(students)
  },

  findById: (req, res) => {
    //This statement does a check to see if the id you send is equal to an available id
    const found = students.find((student) => student.id === parseInt(req.params.id))

    //if you find the student send it back.
    if (found){
      res.json(found)
    }else {
      res.sendStatus(404)
    }
  }
}

module.exports = studentController;