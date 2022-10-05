import express from 'express'
const router = express.Router()
import { authUser, editUserProfile, getUserProfile, registerUser } from '../controllers/userController.js'

import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile/:id').get(getUserProfile).put(protect, editUserProfile)

export default router
