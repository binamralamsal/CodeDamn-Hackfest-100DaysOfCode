import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import leaderboardRoutes from './routes/leaderboardRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/leaderboard', leaderboardRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URL, () => {
    app.listen(PORT, () => {
        console.log(`Server up and running on port ${PORT}`)
    })
})