// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const followerSchema = new mongoose.Schema({
  userId: { type: String, required: true},
  followedBy: { type: String, required: true},
  createdOn: { type: Date},
  modifiedOn: { type: Date}
})

// 3. create model of schema
const Follower = mongoose.model("Follower", followerSchema);

// 4. create CRUD functions on model
//CREATE a follower
async function follow(userId, followedBy) {
  const newFollower = await Follower.create({
    userId: userId,
    followedBy: followedBy,
    createdOn: new Date(),
    modifiedOn: new Date()
  });

  return newFollower;
}

//DELETE
async function unfollow(userId,followerId) {
  await Follower.deleteOne({"userId": userId},{"followerId": followerId});
};

// GET all user Followers
async function getFollowers(userId) {
    return await Follower.find({ "userId": userId});
}

// 5. export all functions we want to access in route files
module.exports = { 
    follow, unfollow, getFollowers
};