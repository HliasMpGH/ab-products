const express = require("express");

const {getProductDetails} = require("../../services/product-service")

const router = express.Router();

// set a router that holds the rest endpoint of a specific product
router.get("/:productId", (req, res) => {
    let productId = req.params.productId;
    let product = getProductDetails(productId);

    if (product === undefined) {
        // product not found
        res.sendStatus(404);
    } else {
        // return retrieved product as a json
        res.status(200).json(product);
    }
});

module.exports = router;
