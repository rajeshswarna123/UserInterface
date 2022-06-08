// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  email: { type: String, required: true},
  createdOn: { type: Date, required: true},
  modifiedOn: { type: Date, required: true}
})

// 3. create model of schema
const User = mongoose.model("User", userSchema);

// 4. create CRUD functions on model
//CREATE a user
async function register(userName, email, password) {
  const user = await getUser(userName);
  if(user) throw Error('Username already in use');

  const newUser = await User.create({
    userName: userName,
    email: email,
    password: password,
    createdOn: new Date(),
    modifiedOn: new Date()
  });

  return newUser;
}

// READ a user
async function login(userName, password) {
  const user = await getUser(userName);
  if(!user) throw Error('User not found');
  if(user.password != password) throw Error('Wrong Password');

  return user;
}

// UPDATE
async function updatePassword(id, password) {
  const user = await User.updateOne({"_id": id}, {$set: { password: password, modifiedOn: new Date()}});
  return user;
}

//DELETE
async function deleteUser(id) {
  await User.deleteOne({"_id": id});
};

// utility functions
async function getUser(userName) {
  return await User.findOne({ "userName": userName});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteUser 
};