const db = require("../models");
const Person = db.persons;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
process.env.SECRET_KEY = 'somekey'


exports.create = (req, res) => {

  const personData = {
    name: req.body.name,
    lastName: req.body.lastName,
    yearOfBirth: req.body.yearOfBirth,
    email: req.body.email,
    password: req.body.password,
  };

  Person.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(person => {
      if(!person){
        const hash = bcrypt.hashSync(personData.password, 10)
        personData.password = hash;
        Person.create(personData)
        .then(person => {
          let token = jwt.sign(person.dataValues, process.env.SECRET_KEY,{
            expiresIn: 1440
          })
          res.json({token: token})
        })
        .catch(err => {
          res.send('error' + error)
        })
      }else{
        res.json({error: 'User already exists'})
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })

};
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Person.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving persons."
      });
    });
};