const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const viewRouter = require("./routers/viewRouter");
const formRouter = require("./routers/formRouter");
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/views", viewRouter);

app.use("/form", formRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});