import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    id: number,
    title: String,
    cover: String,
    shortDescription: String,
    published: Date,
    updated: Date,
    lectureTime: String,
    author: String,
    content: [
        {
            title: String,
            subTitle:String,
            text:String,
            image:String,
            youTubeVideo:String
        }]
})

const PostMessage = mongoose.model('PostMessage',postSchema)

export default PostMessage
