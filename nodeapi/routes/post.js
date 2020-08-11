const express = require("express");
const postController = require("../controllers/post");
const validator = require('../validator');

const router = express.Router();

router.get('/post', postController.getPosts);
router.post('/post', validator.createPostValidator, postController.createPost);
//router.post('/post', postController.createPost);

module.exports = router;