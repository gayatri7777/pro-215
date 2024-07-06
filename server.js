const express = require("express");
const app = express();
const server = require("http").Server(app);
app.set("view engine", "ejs");
app.use(express.static("public"));

const { v4: uuidv4 } = require("uuid");

app.get("/", (req, res) => {
    res.redirect(`/${uuidv4()}`)

});

server.listen(3030);