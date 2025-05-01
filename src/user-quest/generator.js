const products = require("../resources/data/products");

// extract unique categories and brands from products
const categories = [...new Set(products.map(p => p.category))];

// story templates with different scenarios
const storyTemplates = [
    "Your best friend is getting married next month and you want to surprise them with a special gift. After some thought, you've decided a {category} would be perfect. Your budget is ${averagePrice}.",
    "Your old {category} just broke and you need a replacement ASAP. You're looking to spend ${averagePrice}.",
    "As a tech enthusiast, you're always looking to upgrade your gadgets. This time, you're hunting for a {category}. You've set aside ${averagePrice} for this purchase.",
    "You've been saving up and finally have enough to treat yourself. A premium {category} is what you've been dreaming about. You're ready to spend ${averagePrice}.",
    "Your sibling's birthday is coming up and they've been hinting about wanting a {category}. You've budgeted ${averagePrice} for this gift."
];

// Generate a random user quest
function generateUserQuest() {
    // randomly select category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // get products for selected category and brand
    const relevantProducts = products.filter(p => p.category === randomCategory);

    // calculate average price of category
    const averagePrice = Math.round(relevantProducts.reduce((sum, p) => sum + p.price, 0) / relevantProducts.length);

    // build the story
    let story = storyTemplates[Math.floor(Math.random() * storyTemplates.length)]
        .replace('{category}', randomCategory.toLowerCase())
        .replace('{averagePrice}', averagePrice);

    // create markdown content
    const mdContent = `# Your Shopping Quest`
                    +`\n\n${story}\n\n`
                    + `## Quest Details\n-`
                    + `**Category**: ${randomCategory}\n-`
                    + `**Target Budget**: $${averagePrice}\n\n\n\n`
                    + `*Quest Generated on ${new Date().toLocaleDateString()}*`;

    return mdContent;
}

module.exports = generateUserQuest;
