const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const secretSignature = 'NaziyaParveen';

// ROUTE 1 SIGNUP - Create a User using:POST "/app/v1/auth/signup". No Login Required Just Create User

router.post('/signup', [

    body('name', "Name Must Be at Least 3 Character").isLength({ min: 3 }),
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password Must Be at Least 5 Character").isLength({ min: 5 }),
    
  ], async (req, res) => {

  // If there are errors, will return Bad Request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checks If user with email is already exists in database or not, If It is not available will create user in database

  try {
    let user = await User.findOne({ email: req.body.email })

    if (user) {
      return res.status(400).json({ error: "A User With This Email Is already Exists. Please Enter a Different Email" })
    }
  
    // Securing Password with Salt, Pepper & Hashing Algorithm 

    const salt = await bcrypt.genSalt(10);
    securePassword = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
    });

    const obj = {
      user: {
        id:user.id
      }
    }
    const jsontoken = jwt.sign(obj, secretSignature);
    res.send({jsontoken});
  }
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }
})




// ROUTE 2 LOGIN - Login with credentials : POST "/app/v1/auth/login". Only Match Credentials with Database Not create User.

router.post('/login', [

  body('email', "Enter a Valid Email").isEmail(),
  body('password', "Password Cannot be Blank").exists()
], async (req, res) => {

    // If there are errors, will return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {

    let user = await User.findOne({ email }); 
    
    if (!user) {
      return res.status(400).json({ error: "Please Try to login with correct credentials" });
    }

    const passcom = await bcrypt.compare(password, user.password);

    if (!passcom) {
      return res.status(400).json("Please Try to login with correct credentials")
    }

    const obj = {
      user: {
        id:user.id
      }
    }
    const jsontoken = jwt.sign(obj, secretSignature);
    res.send({jsontoken});
  }
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }
});




// ROUTE 2 GET LOGGED IN USER DETAIL - User who is alredy login in : POST "/app/v1/auth/getuser".

router.post('/getuser', fetchuser, async (req, res) => {
  
  try {
    
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  }
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

});

module.exports = router;
