const express = require("express");
const {endpoints} = require("../resources/config");

// include the api endpoints routers
const searchApiRouter = require("./api/search.js");
const productApiRouter = require("./api/product.js");

// include the page routers
const searchPageRouter = require("./search-page.js");
const productPageRouter = require("./product-page.js");

router = express.Router();

// set api routers with the proper prefix for REST communication
router.use(`${endpoints.api}${endpoints.search}`, searchApiRouter);
router.use(`${endpoints.api}${endpoints.products}`, productApiRouter);

// set routers for HTML communication
router.use(endpoints.search, searchPageRouter);
router.use(endpoints.products, productPageRouter);

// redirect all request on / to the product search page
router.get("/", (req, res) => {
    res.redirect(`${endpoints.search}${endpoints.products}`);
});

module.exports = router;
