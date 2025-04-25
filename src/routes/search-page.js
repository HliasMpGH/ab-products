const express = require("express");

const {getProducts} = require("../services/product-service");
const {htmlPages} = require("../resources/config");

const router = express.Router();

// set a router that holds the html endpoint for the product search
router.get("/products", (req, res) => {
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
