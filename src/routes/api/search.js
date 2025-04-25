const express = require("express");
const {endpoints} = require("../../resources/config");

const {getProducts} = require("../../services/product-service");

const router = express.Router();

// set a router that holds the rest endpoint for the product search
router.get(endpoints.products, (req, res) => {
    let searchTerm = req.query.name;
    let products = getProducts(searchTerm);

    if (products === undefined) {
        // products not found
        res.sendStatus(404);
    } else {
        // return retrieved products as a json
        res.status(200).json(products);
    }
});

module.exports = router;
