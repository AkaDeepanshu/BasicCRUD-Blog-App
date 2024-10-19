// import model

const Post = require("../models/postModel")

// business logic
// create post
exports.createPost = async (req,res) =>{
    try{
        // fetch data from the req body
        const {title , body} = req.body;

        // create a new post object
        const post = new Post({
            title , body 
        });
        // save the post obejct to the database
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });

    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating post",
        });
    }
}

// get all post
exports.getAllPosts = async (req,res) =>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts:posts
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating post",
        });
    }
}