const {getProductDetails} = require("../services/product-service");
const {errorMessages, htmlPages} = require("../resources/config");

const express = require("express");

const router = express.Router();

// middleware to track the time of product view (details)
router.use("/:productId", (req, res, next) => {
	if (req.session.startTime) {
		req.session.lastDetailsTime = (Date.now() - req.session.startTime) / 1000; // in seconds
		console.log("totalTime: " + req.session.lastDetailsTime);
	}
    next();
});

// set a router that holds the html endpoint of a specific product
router.get("/:productId", (req, res) => {
    let productId = req.params.productId;
    let product = getProductDetails(productId);

    if (product === undefined) {
        res.render(htmlPages.error, {
            "message": errorMessages.notFoundProduct
        });
    } else {
        res.render(htmlPages.product, {
            "product": product
        });
    }
});

module.exports = router;
