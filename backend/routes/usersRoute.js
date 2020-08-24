
const express = require('express')
const router = express.Router()
const User = require('../model/usersModal')
const { registerValidation } = require('../validation/validation');
const { getUsers, deleteUsers } = require('../controllers/usersControllers')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv/config')


router.get('/', getUsers)
router.post('/register', async (req, res) => {
  // validate the data before we save a user 
  const { error } = registerValidation(req.body);
  // send the specify error of bad request 
  if (error) return res.status(400).send(error.details[0].message)
  // checking if the user is already in the database
  const userExist = await User.findOne({ email: req.body.email })
  if (userExist) return res.status(400).send('email already exists')
  // create a new user 
  const user = new User(req.body)
  // random character string that is added to the beginning or the end of a password from bcrypt library
  const salt = await bcrypt.genSalt(10)
  // hadh the passwords 
  user.motDePasse = await bcrypt.hash(req.body.motDePasse, salt);

  user.save()
  res.send({ user })

});

router.post('/login', async (req, res) => {


  // checking if the email and password are exists in the database


  const userExist = await User.findOne({ email: req.body.email })
  const validPass = await bcrypt.compare(req.body.motDePasse, userExist.motDePasse)

  // checking if password is correct
  if (!validPass) { res.status(400).send('invalid password') }

  // create and assign a token 
  const token = jwt.sign({ user: userExist }, (process.env.TOKEN_SECRET))


  res.send(token)

});


router.delete('/:id', deleteUsers)
module.exports = router