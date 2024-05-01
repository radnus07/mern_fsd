const express = require('express')
const mongo=require('mongoose')
const cors = require("cors")
const studentprofile = require('./models/Students')
const bcrypt = require('bcrypt');
const dotenv=require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())
const mongoURI = process.env.MONGODB_URI;

mongo.connect(mongoURI).then(()=>{console.log("connected")}).catch((e)=>{console.log("Error :" ,e)})

app.listen(8000, () => {
  console.log('Server listening on port 8000!');
  });

//Register
app.post("/register", async (req, res) => {
  const { email, rno, password } = req.body;
  try {
    // Check if user with the provided email already exists
    const existingUser = await studentprofile.findOne({ email: email });

    if (existingUser) {
      // If user already exists, return an error message
      return res.json({ error: 'User already exists' });
    } else {

      // Create the user with auto-generated ID
      const user = await studentprofile.create({
        email: email,
        rno: rno,
        password: password
      });

      // If user is successfully created, return a success message
      if (user) {
        return res.json({ message: 'User created successfully' });
      } else {
        // If user creation fails, return an error message
        return res.json({ error: 'Failed to create user' });
      }
    }
  } catch (error) {
    // If any error occurs during the process, return an error message
    console.error(error);
    return res.json({ error: 'Internal server error' });
  }
})


//Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await studentprofile.findOne({ email: email });

    if (!findUser) {
      return res.json("notexist"); // User not found
    }

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (isMatch) {
      // Login successful! (You can send a success message or user data)
      res.json(findUser); // Adjust response as needed
    } else {
      res.json("incorrect password"); // Incorrect password
    }
  } catch (error) {
    console.error(error);
    res.json("server error"); // Handle errors appropriately
  }
});
