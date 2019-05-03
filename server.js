const express = require("express");
const PORT = process.env.PORT || 8008;
const app = express();
const db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exhb = require("express-handlebars");

app.engine("handlebars", exhb({ defaultLayout: "main" }));
app.set("view engine", 'handlebars');

// const routes = require("./controllers/burgers_controller.js");

// app.use(routes);

require("./controllers/burgers_controller.js")(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
