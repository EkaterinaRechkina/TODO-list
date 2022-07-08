require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const { Task, User } = require("./db/models");
const PORT = process.env.PORT ?? 3000;
const path = require("path");

app.use(
  cors({
    // origin: "http://localhost:3000",
    // credentials: true,
  })
);

app.use(express.static(path.resolve(process.env.PWD, "..", "client", "build")));
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

app.get("/task/:id", async (req, res) => {
  const { id } = req.params;
  const oneTask = await Task.findOne({ where: { id } });
  res.json(oneTask);
});

app.put("/task/:id", async (req, res) => {
  const { id, title, description } = req.body;
  console.log(id, title, description);
  const task = await Task.update(
    { title, text: description },
    { where: { id } }
  );
  const currentTask = await Task.findOne({ where: { id } });
  console.log(currentTask);
  res.json(currentTask);
});

app.patch("/task/:id", async (req, res) => {
  const { id, status } = req.body;
  console.log(id, status);
  const task = await Task.update({ status: true }, { where: { id } });
  const checkedTask = await Task.findOne({ where: { id } });
  res.json(checkedTask);
});

app.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  const deleteTask = await Task.destroy({ where: { id } });
  res.json(deleteTask);
});

app.listen(PORT, () => {
  console.log(`success`);
});
