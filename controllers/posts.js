import PostMessage from "../models/postMessage.js"

export const getPosts = (req,res)=>{
    
    PostMessage.find()
        .then((postMessages)=>{
            res.status(200).json(postMessages)
        })
        .catch((error)=>res.status(404).json({message:error.message}))
    /* res.send('This works') */
}

export const createPost = (req,res)=>{
    res.send("Post Creation")
}