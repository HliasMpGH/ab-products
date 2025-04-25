/** The basic configurations of the service */
const settings = {
    "port": 8000
};

/** The endpoints configuration of the service */
const endpoints = {
    "api": "/api", // the prefix for the rest endpoints
    "products": "/products", // the prefix for the product-related operations
    "search": "/search" // the prefix for the search-related operations
}

/** The error messages that can be returned from the service */
const errorMessages = {
    "notFoundPath": "Unrecognized path: {param}",
    "notFoundProduct": "Could not find related product"
};

/** The html pages available for responses from the service */
const htmlPages = {
    "search": "index.ejs",
    "product": "product_details.ejs",
    "error": "error_page.ejs"
}

module.exports = {settings, endpoints, errorMessages, htmlPages};
