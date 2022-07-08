require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const { Task, User } = require("./db/models");
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const allTasks = await Task.findAll({
    limit: 5,
    order: [["id", "DESC"]],
  });
  res.json(allTasks);
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll({
    order: [["id", "DESC"]],
  });
  res.json(tasks);
});

app.post("/task", async (req, res) => {
  console.log(req.body);
  try {
    const { id, title, description } = req.body;

    const newElement = await Task.create({ id, title, text: description });

    return res.status(201).json(newElement);
  } catch (err) {
    console.log(err);
    return res.sendStatus(406);
  }
});

// app.get("/api/v1/cats", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.thecatapi.com/v1/images/search?limit=3&page=1&order=Desc`
//     );
//     const result = response.data.map((el) => ({ id: el.id, url: el.url }));
//     cats = [...cats, ...result];

//     res.json(result);
//   } catch (err) {
//     res.sendStatus(400);
//   }
// });

app.get("/list/:id", (req, res) => {
  const { id } = req.params;
  const oneTask = Task.findOne({ where: { id } });
  res.json(oneTask);
});

app.listen(PORT, () => {
  console.log(`success`);
});
