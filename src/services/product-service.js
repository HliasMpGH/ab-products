const products = require("../resources/data/products");
const {settings} = require("../resources/config");

/** Return the products that match a given name query. */
const getProducts = (searchTerm = "") => {
    let productsResult;

    if (searchTerm) {
        productsResult = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase())
        });
    } else {
        // if no name query was specified, return all products
        productsResult = products;
    }

    // randomize the product list if specified in settings
    if (settings.randomProductList) return shuffleProducts(productsResult);
    return productsResult;
};

/** Return the product that matches a given uid query. */
const getProductDetails = (productId = "") => {
    // if no uid was specified, return empty product
    if (!productId) return undefined;

    // find first product of given uid
    return products.find(product => {
        return product.id == productId;
    })
};

const shuffleProducts = (products) => {
    // dont modify the original array
    const newArray = [...products];

    // Fisher-Yates shuffle
    for (let i = newArray.length - 1; i > 0; i--) {
        // pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // swap elements at indices i and j
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
};

module.exports = {getProducts, getProductDetails, shuffleProducts};
