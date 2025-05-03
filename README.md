# Product Search A/B Testing Example

A demonstration repository showcasing A/B testing techniques for product search implementations. This project enables users to search for products by name and displays results using two different presentation methods, separated by a vertical line for easy comparison.

## Overview

This application serves as an small example of implementing A/B testing in a web application. It allows you to visualize how different search result layouts can affect user experience and engagement.

The search interface presents two different ways of displaying the same product data side-by-side, making it easy to compare different UI approaches and analyze which might be more effective.

In a production environment, the two layouts can be randomly interchanged between users, to retrieve unbiased results.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **EJS** - Server-side templating for HTML rendering

## Requirements

### System Requirements
- Node.js
- NPM

## Features

- Product search by name
- Dual-display results for A/B testing comparison
- Individual product detail pages
- User engagement analytics sent to configurable Google Form
- RESTful API endpoints for programmatic access
- Packagable as a standalone binary

## Metrics Collected

The application automatically captures the following user engagement data points:

| Metric | Description | Unit |
|--------|-------------|------|
| Search Format Preference | User's selection between search format A or B | String (A/B) |
| Purchase Format Preference | User's selection between purchase format A or B | String (A/B) |
| Search Completion Time | Time elapsed from search initiation to product selection | Seconds |
| Purchase Completion Time | Time elapsed from search initiation to purchase confirmation | Seconds |
| Total Number of Requests | Number of requests issued until purchase confirmation | Integer |

## Configuration Options

Administrators can customize the google form analytics through the `config.js` module:

```js
const submit = {
    "id": process.env.SUBMISSION_ID || "", // the submission id of the form
    // the ids of the unique entries of the form
    "entries": {
        "search": process.env.SEARCH_ENTRY || "",
        "buy": process.env.BUY_ENTRY || "",
        "time": process.env.TIME_ENTRY || "",
        "viewTime": process.env.VIEW_TIME_ENTRY || "",
        "buttonsPressed": process.env.BUTTONS_ENTRY || ""
        // add more entries if needed
    }
}
```
Then, in the `submit.js` module:

```js
const formUrl = "https://docs.google.com/forms/d/"
		+ `${submit.id}/formResponse?usp=pp_url&submit=Submit`
		+ `&entry.${submit.entries.search}=${encodeURIComponent(search)}`
		+ `&entry.${submit.entries.buy}=${encodeURIComponent(buy)}`
		+ `&entry.${submit.entries.time}=${encodeURIComponent(totalTime)}`
		+ `&entry.${submit.entries.viewTime}=${encodeURIComponent(detailsTime)}`
		+ `&entry.${submit.entries.buttonsPressed}=${encodeURIComponent(totalRequests)}`;
        // add the new entries for the request
```

## Endpoints

### Web Endpoints (HTML)

- `/products/:product_id` - View details for a specific product
- `/search/products` - Search for products and view the A/B testing interface

### API Endpoints (JSON)

- `/api/products/:product_id` - Get product details in JSON format
- `/api/search/products` - Search for products and receive JSON results

## Installation

```bash
# Clone the repository
git clone https://github.com/HliasMpGH/ab-products

# Install dependencies
npm install

# Start the server
npm start
```

* Note: If you just want the binary, click [here](https://github.com/HliasMpGH/ab-products/releases/download/v1.0/ab-products.exe).

## Building a Standalone Binary

This project can be compiled into a standalone executable using [pkg](https://github.com/vercel/pkg):

```bash
# Install pkg globally if you haven't already
npm install -g pkg

# Build the binary
pkg --no-bytecode .
```

This will create an executable in `/bin` that can run without Node.js installed on the target machine.

* Note: The default configuration will produce a windows executable file. For linux/mac users, change the `pkg.targets` value in package.json, from `"latest-win-x64"` to `"latest-[linux|macos]-x64"`

## Usage

1. Start the server or run the compiled binary
2. Navigate to `http://localhost:8000` in your browser (the port can be changed in src/resources/config)
3. Use the search bar to find products by name
4. Compare the two different presentation methods side by side
5. Click on individual products to view details
