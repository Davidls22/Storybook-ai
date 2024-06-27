import express from 'express';
import * as dotenv from 'dotenv';

import Post from '../mongodb/models/post.js'

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (err) {
      console.error('Error fetching posts:', err);
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
  });
  
  router.route('/').post(async (req, res) => {
    try {
      const { name, prompt, generatedText } = req.body;
  
      const newPost = await new Post({ // Ensure you are using 'new Post' to create a new document
        name,
        prompt,
        generatedText,
      }).save(); // Save the new document to the database
  
      res.status(201).json({ success: true, data: newPost });
    } catch (err) {
      console.error('Error creating post:', err);
      res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
  });
  
  export default router;