const {getProductDetails} = require("../services/product-service");
const {errorMessages, htmlPages} = require("../resources/config");

const express = require("express");

const router = express.Router();

// set a router that holds the html endpoint of a specific product
router.get("/:productId", (req, res) => {
    let productId = req.params.productId;
    let product = getProductDetails(productId);

    if (product === undefined) {
        res.render("error_page", {
            "message": errorMessages.notFoundProduct
        });
    } else {
        res.render(htmlPages.product, {
            "product": product
        });
    }
});

module.exports = router;
