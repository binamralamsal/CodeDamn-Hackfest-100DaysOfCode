import express from "express";
const router = express.Router();
import {
  addComment,
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  likePost,
  updatePost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/like/:id").put(protect, likePost);
router.route("/create").post(protect, createPost);
router.route("/").get(getAllPosts);
router.route("/:id").get(getPost);
router.route("/update/:id").put(protect, updatePost);
router.route("/delete/:id").delete(protect, deletePost);
router.route("/comment/").post(protect, addComment)

export default router;
