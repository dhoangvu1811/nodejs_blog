const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars"); // Sử dụng `create` từ `express-handlebars`
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
// HTTP logger
// app.use(morgan("combined"));

// Template engine
const hbs = create({
    extname: ".hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views")); // Sử dụng dấu phẩy để nối các đoạn đường dẫn

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});
app.get("/search", (req, res) => {
    res.render("search");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
