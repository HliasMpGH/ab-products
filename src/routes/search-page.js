const express = require("express");

const {getProducts} = require("../services/product-service");
const {endpoints, htmlPages} = require("../resources/config");

const router = express.Router();

// middleware to track the search time
router.use(endpoints.products, (req, res, next) => {
    if (!req.session.startTime) {
        req.session.startTime = Date.now();
        console.log("setting new start time: " + req.session.startTime);
    }
    console.log("startTime: " + req.session.startTime);
    next();
});

// set a router that holds the html endpoint for the product search
router.get(endpoints.products, (req, res) => {
    let searchTerm = req.query.name;
    console.log("search:"+searchTerm);
    let products = getProducts(searchTerm);

    console.log("products:"+JSON.stringify(products));
    res.render(htmlPages.search, {
        "products": products,
        "searchTerm": searchTerm
    });
});

module.exports = router;
