/** The basic configurations of the service */
const settings = {
    "port": process.env.PORT || 8000,
    "session": {
        "secret": process.env.SESSION_SECRET || ""
    }
};

/** The endpoints configuration of the service */
const endpoints = {
    "api": "/api", // the prefix for the rest endpoints
    "products": "/products", // the prefix for the product-related operations
    "search": "/search", // the prefix for the search-related operations
    "submit": "/submit-to-google-form" // the prefix for the form submissions
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

const submit = {
    "id": process.env.SUBMISSION_ID || "",
    "entries": {
        "search": process.env.SEARCH_ENTRY || "",
        "buy": process.env.BUY_ENTRY || "",
        "time": process.env.TIME_ENTRY || "",
    }
}

module.exports = {settings, endpoints, errorMessages, htmlPages, submit};
