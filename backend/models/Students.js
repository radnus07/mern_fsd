const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const StudentSchema = new mongoose.Schema({
  email: String,
  rno: String,
  password: {
    type: String,
    required: true
  }
});

// Hash password before saving student
StudentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const StudentProfile = mongoose.model("users", StudentSchema);
module.exports = StudentProfile;
