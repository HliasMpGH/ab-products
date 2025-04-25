const {settings} = require("./resources/config");
const express = require("express");
const path = require("path");

const apiRouter = require("./routes/api-router.js");
const errorRouter = require("./errors/error-router.js");

app = express();

// set engines and basic config
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));

// set the available routers on use
app.use(apiRouter);
app.use(errorRouter);

// start the service
app.listen(settings.port, () => {
    console.log(`Listening for requests on ${settings.port}`)
});
