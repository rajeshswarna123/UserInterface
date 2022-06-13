// 1. import any needed libraries
const express = require("express");
const Follower = require('../models/follower'); //accesses functions in follower model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/follow', async (req, res) => {
    try {
      const follower = await Follower.follow(req.body.userId, req.body.followerId);
      res.send({...follower});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })


  .get('/getFollowers/:userId', async (req, res) => {
    try {
      const followers = await Follower.getFollowers(req.params.userId);
      res.send({...followers});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })
  
  .delete('/unfollow', async (req, res) => {
    try {
      await Follower.unfollow(req.body.userId, req.body.followerId);
      res.send({ success: "Follower deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

// 3. export router for use in index.js
module.exports = router;