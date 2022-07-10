require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const { Task, User } = require("./db/models");
const PORT = process.env.PORT ?? 3000;
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bcrypt = require("bcrypt");

const saltRounds = 10;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: process.env.COOKIE_NAME, // ключ куки
  secret: process.env.SECRET, // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем только зарегестрированных
  httpOnly: true, // нельзя изменить куки с фронта
  cookie: { expires: 24 * 60 * 60e3 },
};
app.use(session(sessionConfig));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(express.static(path.resolve(process.env.PWD, "..", "client", "build")));

app.get("/", async (req, res) => {
  const id = req.session.userId;
  if (id) {
    // console.log("id40", id);
    const allTasks = await Task.findAll({
      where: { user_id: id },
      limit: 5,
      order: [["id", "DESC"]],
    });
    res.json(allTasks);
  }
  res.status(200).end();
});

app.get("/tasks", async (req, res) => {
  const id = req.session.userId;

  console.log("idtask", id);
  if (id) {
    const tasks = await Task.findAll({
      where: { user_id: id },
      order: [["id", "DESC"]],
    });
    res.json(tasks);
  }
  res.status(200).end();
});

app.post("/task", async (req, res) => {
  console.log(req.body);
  try {
    const userId = req.session.userId;
    console.log("userId", userId);
    console.log(req.session);
    const user = await User.findOne({
      where: { id: userId },
    });
    const user_id = user.id;
    // console.log("userid", user_id);
    const { id, title, description } = req.body;

    const newElement = await Task.create({
      id,
      title,
      text: description,
      user_id,
    });

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
  // console.log(id, title, description);

  const task = await Task.update(
    { title, text: description },
    { where: { id } }
  );
  const currentTask = await Task.findOne({ where: { id } });
  console.log(currentTask);
  res.json(currentTask);
});

app.patch("/task/:id", async (req, res) => {
  console.log("checkbox", req.params);
  const { id } = req.params;
  const checkedTask = await Task.findOne({ where: { id } });
  const taskStatus = checkedTask.status;
  const task = await Task.update({ status: !taskStatus }, { where: { id } });
  // console.log("ch", checkedTask);
  console.log("task", taskStatus);
  console.log("taskrevert", !taskStatus);
  // res.json(checkedTask);
  res.sendStatus(200);
});

app.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  const deleteTask = await Task.destroy({ where: { id } });
  res.json(deleteTask);
});

app.post("/registration", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      console.log("already exist");
      return res.status(404).json({ message: "exist" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    req.session.userId = newUser.id;
    req.session.name = newUser.name;
    req.session.email = newUser.email;

    // console.log("newUser", newUser);

    res.json({ id: newUser.id, name: newUser.name, email: newUser.email });
  } catch (err) {
    console.log(err);
    res.sendStatus(406);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userLogin = await User.findOne({
      where: { email },
    });

    if (!userLogin) {
      throw Error("no such user");
    }

    const isValidPass = await bcrypt.compare(password, userLogin.password);

    if (!isValidPass) {
      throw Error("no such password");
    }

    req.session.userId = userLogin.id;
    req.session.name = userLogin.name;
    req.session.email = userLogin.email;
    // console.log("test", req.session.userId);

    res.json({
      id: userLogin.id,
      name: userLogin.name,
      email: userLogin.email,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(406);
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) console.log(error);
  });
  res.clearCookie(process.env.COOKIE_NAME);
  res.sendStatus(200);
  // res.end();
});

app.listen(PORT, () => {
  console.log(`success`);
});
