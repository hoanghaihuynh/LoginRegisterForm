const mongoose = require('mongoose');

// Định nghĩa schema
const userSchema = new mongoose.Schema(
  {
    username: {type: String, require: true},
    password: {type: String, require: true}
  }
);

// Tạo model từ schema
const User = mongoose.model('User', userSchema);

module.exports = User;
