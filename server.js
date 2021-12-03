import express from "express";
import cors from "cors";
import mongoos from "mongoose";
import model from "./model.js";

// initializing
const app = express();
const PORT = 8000 || process.env.PORT;
const pass = "admin";
const db = "custom_data";
const URL = `mongodb+srv://Admin:${pass}@cluster0.5vmgi.mongodb.net/${db}?retryWrites=true&w=majority`;
// db connection

mongoos.connect(
  URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// midlewares
app.use(express.json());
app.use(cors());

// endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello, I am working in server");
});

app.post("/program/create/", (req, res) => {
  const body = req.body;

  model.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/program/get-program/", (req, res) => {
  model.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener or start server
app.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
