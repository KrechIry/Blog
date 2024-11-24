let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
let path = require("path");
let mongoose = require ("mongoose");
// let config = require("./config/database");
let methodOverride = require("method-overrisde");

let db = 'mongodb+srv://aametistooo:<u@tGC@6J9WSZ.Qy>@cluster0.3fgwk.mongodb.net/Node-blog'; 
mongoose.connect(db);
//let db = config.database;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("__method"));

app.get("/", (req, res) => {
   res.render("index", { title: "Home" });
});

/*ap.get("./add-post", (req, res) => {
res.render("add-post", { title: "Add post" }); I
});*/

app.post("/add-post", (req, res) => {
    let { title, author} = req.body;
    let post = new Post({ title, author});
        post
        .save()
        .then(() => res.redirect("/posts"))
        .catch((error) => {
        console.log(error);
        res.render("error")
        });
    });
       
    app.get("/posts", (req,res)=>{
        Post.find()
        .then((posts)  => res.render("posts", { title:
            "Posts", posts}))
            .catch ((error) => {
                console.log(error);
                res.render("error");
                });

    });

    app.get("/edit-post/:id", (req,res)=>{
        let id = req.params.id;
        Post.findByIdAndDelete(id)
        .then((post)  => res.render("posts", { title:
            "Post", posts}))
            .catch ((error) => {
                console.log(error);
                res.render("error");
                });
    });

    app.get("/posts:id", (req,res)=>{
        
        Post.find()
        .then((posts)  => res.render("posts", { title:
            "Posts", posts}))
            .catch ((error) => {
                console.log(error);
                res.render("error");
                });

    });

    app.put("/edit-post/:id", (req,res)=>{
        let id = req.params.id;
        const { title, author} = req.body;
        Post.findByIdAndUpdate(id, { title, author})
        .then(()  => res.redirect (`/posts`))
        .catch ((error) => {
             console.log(error);
             res.render("error");
             });
    });


/*app.listen(PORT, () => {  console.log(`Server has been started on PORT ${PORT}.....`);      });*/

async function start() { 
    try { 
        await mongoose.connect(db); 
        console.log("Connection to MongoDb is success!"); 
        app.listen(PORT, () => { 
        cconsole.log(`Server is listening on PORT ${PORT}...`);
            }); 
        } catch (error) { 
             console.log("\n Connection error!!! \n\n", error);
        }   } 
            
    
    start();

