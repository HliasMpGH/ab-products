const products = require("../resources/data/products");

/** Return the products that match a given name query. */
const getProducts = (searchTerm = "") => {
    // if no name query was specified, return all products
    if (!searchTerm) return products;

    // filter products based on name query
    return products.filter(product => {
        return product.name == searchTerm;
    });
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

module.exports = {getProducts, getProductDetails};
