// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true},
  content: { type: String, required: true},
  createdBy: { type: String, required: true},
  createdOn: { type: Date, required: true},
  modifiedOn: { type: Date, required: true}
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// 4. create CRUD functions on model
//CREATE a post
async function create(title, content, userId) {
  const newPost = await Post.create({
    title: title,
    content: content,
    createdBy: userId,
    createdOn: new Date(),
    modifiedOn: new Date()
  });

  return newPost;
}

// UPDATE
async function updatePost(postId, title, content) {
  const post = await Post.updateOne({"_id": postId}, {$set: { title: title, content: content, modifiedOn: new Date()}});
  return post;
}

//DELETE
async function deletePost(postId) {
  await Post.deleteOne({"_id": postId});
};

// GET post
async function getPost(postId) {
  return await Post.findOne({ "_id": postId});
}

// GET all user Posts
async function getUserPosts(userId) {
    return await Post.find({ "createdBy": userId});
}

// GET
async function get() {
    return await Post.find();
}

// 5. export all functions we want to access in route files
module.exports = { 
    create, updatePost, getPost, deletePost, getUserPosts, get
};