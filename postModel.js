/*let mongoose = require("mongoose");  
let Schema = mongoose.Schema; 
 
let postSchema = new Schema({ 
 title: { 
     type: String, 
     required: true,   
    },  
    author: { 
        type: String, 
        required: true, 
    },     });
let postModel = mongoose.model("postModel", postSchema); 
module.exports = postModel;*/

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
