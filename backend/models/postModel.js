import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const postSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    githubLink: {
        type: String,
    },
    liveDemoLink: {
        type: String,
    },
    likes: {
        type: Array,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post