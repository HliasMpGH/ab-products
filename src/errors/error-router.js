const {errorMessages, htmlPages} = require("../resources/config")
const express = require("express");

const router = express.Router();

/** Error message of not found location */
let notFoundPathMessage = errorMessages.notFoundPath;

/**
 * Handle the unrecognized paths requested by the API.
 * Returns a 404 with no body.
 */
router.all("/api/*splat", (req, res) => {
    res.sendStatus(404)//.json({"error": notFoundPathMessage.replace("{param}", req.originalUrl)});
});

/**
 * Handle the unrecognized paths requested as rendered pages.
 * Returns a rendered page with the error.
 */
router.all("/*splat", (req, res) => {
    res.status(404).render(htmlPages.error, {
        "message": notFoundPathMessage.replace("{param}", req.originalUrl)
    });
});

module.exports = router;
