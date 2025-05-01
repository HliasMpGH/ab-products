require('dotenv').config()
const {settings, endpoints} = require("./resources/config");
const express = require("express");
const session = require("express-session");
const path = require("path");
// import open from 'open';
const open = require("open");

const apiRouter = require("./routes/api-router.js");
const errorRouter = require("./errors/error-router.js");

app = express();

// set engines and basic config
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));

// set session config
app.use(session({
    secret: settings.session.secret,
    resave: false,
    saveUninitialized: false,
    maxAge: 1000 * 60 * 60 * 24 * 2, // session cookie valid for 2 days
}));

// set the available routers on use
app.use(apiRouter);
app.use(errorRouter);

// start the service
app.listen(settings.port, () => {
    console.log(
        `Listening for requests on ${settings.port}`
        + `\n\n`
        + `Opening http://${settings.host}:${settings.port}${endpoints.search}${endpoints.products}`
    );
    if (settings.open) {
        // invoke the browser on the app
        open(`http://${settings.host}:${settings.port}${endpoints.search}${endpoints.products}`);
    }
});
