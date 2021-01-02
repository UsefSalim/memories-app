import express from 'express';
import { getPosts, createPost } from "../controllers/posts.controller.js";


const router = express.Router();
// !! -------------------------------- Routes -----------------------!!// 
router.get('/', getPosts);
router.post('/', createPost);
export default router;