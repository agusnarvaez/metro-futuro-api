import PostMessage from "../models/postMessage.js"

export const getPosts = (req,res)=>{
    
    PostMessage.find()
        .then((postMessages)=>{
            res.status(200).json(postMessages)
        })
        .catch((error)=>res.status(404).json({message:error.message}))
    
}

export const createPost = (req,res)=>{
    const post = req.body

    const newPost = new PostMessage(post)

    newPost.save()
        .then((newPost)=>{
            res.status(201).json(newPost)
        })
        .catch((error)=>res.status(409).json({message:error.message}))
}