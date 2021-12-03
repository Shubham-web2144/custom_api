import express  from "express";
import cors from "cors";
import mongoos from "mongoose";

// initializing
const app = express();
const PORT = 8000 || process.env.PORT;
const pass = "admin";
const db = "custom_data"
const URL = `mongodb+srv://Admin:${pass}@cluster0.5vmgi.mongodb.net/${db}?retryWrites=true&w=majority`
// db connection

mongoos.connect(URL, 
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if(err){
            console.log(err);
        }
    }
);

// midlewares
app.use(express.json());
app.use(cors());

// endpoints
app.get("/v1", (req,res) => {
    res.status(200).send("Hello, I am working in server");
});
// listener or start server
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});