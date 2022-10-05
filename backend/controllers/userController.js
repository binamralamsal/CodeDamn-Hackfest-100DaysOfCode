import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Post from "../models/postModel.js";

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 */

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.status(400);
    throw new Error("Incomplete user data");
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      score: user.score,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/**
 * @desc    Register a new user
 * @route   POST /api/users
 * @access  Public
 */

const registerUser = asyncHandler(async (req, res) => {
  const { avatar, name, email, password } = req.body;

  if (name === "" || email === "" || password === "") {
    res.status(400);
    throw new Error("Incomplete user data");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    avatar,
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      score: user.score,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/**
 * @desc    Get single user
 * @route   GET /api/users/profile/:id
 * @access  Private
 */

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  const posts = await Post.find({ userId: req.params.id }).sort({ createdAt: 'desc' })

  if (user) {
    res.json({
      id: user.id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      score: user.score,
      posts,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/**
 * @desc    Edit user profile
 * @route   PUT /api/users/profile/:id
 * @access  Private
 */

const editUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.avatar = req.body.avatar || user.avatar

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      avatar: updatedUser.avatar,
      score: updatedUser.score,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, registerUser, getUserProfile, editUserProfile };
