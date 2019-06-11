require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
app.use(express.json());

const {
  userInfo,
  login,
  register
} = require("./controller/authController/authController");
const {
  getMessages,
  postMessage,
  updateMessage,
  deleteMessage
} = require("./controller/messageController/messageController");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    saveUninitialized: false,
    secret: SESSION_SECRET,
    resave: true,
    cockie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});

// auth endpoints
app.get("/api/user", userInfo);
app.post("/api/register", register);
app.post("/api/login", login);

// message endpoints
app.get("/api/messages", getMessages);
app.post("/api/messages", postMessage);
app.put("/api/messages/:id", updateMessage);
app.delete("/api/messages/:id", deleteMessage);

const port = SERVER_PORT || 4000;

app.listen(port, () => console.log(`port running on ${port} 🎢`));
