/** dummy data used for testing purposes */
const products = [
    // Smartphones
    { "id": 1, "name": "iPhone 15 Pro Max", "price": 1099.99, "description": "Apple's flagship smartphone", "specifications": { "Storage": "256GB" }, "image": "https://placehold.co/300x200?text=iPhone+15+Pro+Max", "category": "Smartphone"},
    { "id": 2, "name": "Samsung Galaxy S23 Ultra", "price": 1199.99, "description": "Premium Android phone", "specifications": { "Storage": "512GB" }, "image": "https://placehold.co/300x200?text=Galaxy+S23+Ultra", "category": "Smartphone"},
    { "id": 3, "name": "Google Pixel 8 Pro", "price": 999.99, "description": "Google's premium smartphone", "specifications": { "Camera": "50MP" }, "image": "https://placehold.co/300x200?text=Pixel+8+Pro", "category": "Smartphone"},
    { "id": 4, "name": "OnePlus 12", "price": 899.99, "description": "Flagship phone with Hasselblad camera", "specifications": { "Processor": "Snapdragon 8 Gen 3" }, "image": "https://placehold.co/300x200?text=OnePlus+12", "category": "Smartphone"},
    { "id": 5, "name": "Nothing Phone (2)", "price": 699.99, "description": "Unique Android phone with Glyph Interface", "specifications": { "RAM": "12GB" }, "image": "https://placehold.co/300x200?text=Nothing+Phone+2", "category": "Smartphone"},
    { "id": 6, "name": "Sony Xperia 1 V", "price": 1299.99, "description": "Flagship smartphone with 4K OLED display", "specifications": { "Camera": "Triple 12MP" }, "image": "https://placehold.co/300x200?text=Xperia+1+V", "category": "Smartphone"},
    { "id": 7, "name": "Asus ROG Phone 7", "price": 999.99, "description": "Gaming smartphone with high refresh rate", "specifications": { "Processor": "Snapdragon 8 Gen 2" }, "image": "https://placehold.co/300x200?text=ROG+Phone+7", "category": "Smartphone"},
    { "id": 8, "name": "Motorola Edge 40 Pro", "price": 799.99, "description": "Premium smartphone with curved display", "specifications": { "Battery": "4600mAh" }, "image": "https://placehold.co/300x200?text=Edge+40+Pro", "category": "Smartphone"},
    { "id": 9, "name": "Xiaomi 13 Ultra", "price": 1199.99, "description": "Flagship smartphone with Leica cameras", "specifications": { "Camera": "50MP Quad" }, "image": "https://placehold.co/300x200?text=Xiaomi+13+Ultra", "category": "Smartphone"},
    { "id": 10, "name": "Realme GT 3", "price": 699.99, "description": "Affordable flagship with 240W fast charging", "specifications": { "Charging": "240W" }, "image": "https://placehold.co/300x200?text=Realme+GT+3", "category": "Smartphone"},

    // Laptops
    { "id": 11, "name": "MacBook Pro 16", "price": 3499.99, "description": "Professional-grade laptop", "specifications": { "RAM": "32GB" }, "image": "https://placehold.co/300x200?text=MacBook+Pro+16", "category": "Laptop"},
    { "id": 12, "name": "Dell XPS 15", "price": 2199.99, "description": "Premium Windows laptop", "specifications": { "Processor": "Intel i9" }, "image": "https://placehold.co/300x200?text=Dell+XPS+15", "category": "Laptop"},
    { "id": 13, "name": "ASUS ROG Zephyrus G14", "price": 1649.99, "description": "Compact gaming laptop", "specifications": { "Graphics": "RTX 4070" }, "image": "https://placehold.co/300x200?text=ROG+Zephyrus+G14", "category": "Laptop"},
    { "id": 14, "name": "HP Spectre x360 14", "price": 1499.99, "description": "Convertible laptop with OLED display", "specifications": { "Storage": "1TB SSD" }, "image": "https://placehold.co/300x200?text=Spectre+x360", "category": "Laptop"},
    { "id": 15, "name": "Lenovo ThinkPad X1 Carbon", "price": 1699.99, "description": "Professional ultrabook", "specifications": { "Processor": "Intel i7" }, "image": "https://placehold.co/300x200?text=ThinkPad+X1+Carbon", "category": "Laptop"},
    { "id": 16, "name": "Acer Predator Helios 16", "price": 1999.99, "description": "Gaming laptop with advanced cooling", "specifications": { "Graphics": "RTX 4080" }, "image": "https://placehold.co/300x200?text=Predator+Helios+16", "category": "Laptop"},
    { "id": 17, "name": "MSI Stealth 15M", "price": 1499.99, "description": "Slim gaming laptop with powerful specs", "specifications": { "Processor": "Intel i7" }, "image": "https://placehold.co/300x200?text=Stealth+15M", "category": "Laptop"},
    { "id": 18, "name": "Razer Blade 14", "price": 2399.99, "description": "Compact gaming laptop with QHD display", "specifications": { "Graphics": "RTX 4070" }, "image": "https://placehold.co/300x200?text=Blade+14", "category": "Laptop"},
    { "id": 19, "name": "Gigabyte Aero 16", "price": 2099.99, "description": "Creator laptop with OLED display", "specifications": { "Screen": "16-inch OLED" }, "image": "https://placehold.co/300x200?text=Aero+16", "category": "Laptop"},
    { "id": 20, "name": "Samsung Galaxy Book 3 Ultra", "price": 2499.99, "description": "Premium laptop with AMOLED display", "specifications": { "Processor": "Intel i9" }, "image": "https://placehold.co/300x200?text=Galaxy+Book+3+Ultra", "category": "Laptop"},

    // Headphones
    { "id": 21, "name": "Sony WH-1000XM5", "price": 349.99, "description": "Noise cancelling headphones", "specifications": { "Battery life": "30 hours" }, "image": "https://placehold.co/300x200?text=Sony+WH-1000XM5", "category": "Headphones"},
    { "id": 22, "name": "Bose QuietComfort Ultra", "price": 429.99, "description": "Premium noise cancelling headphones", "specifications": { "Audio": "Spatial" }, "image": "https://placehold.co/300x200?text=QuietComfort+Ultra", "category": "Headphones"},
    { "id": 23, "name": "Beats Studio Pro", "price": 349.99, "description": "Premium headphones", "specifications": { "ANC": "Advanced" }, "image": "https://placehold.co/300x200?text=Beats+Studio+Pro", "category": "Headphones"},
    { "id": 24, "name": "SteelSeries Arctis Nova Pro", "price": 349.99, "description": "High-end gaming headset", "specifications": { "Battery life": "44 hours" }, "image": "https://placehold.co/300x200?text=Arctis+Nova+Pro", "category": "Headphones"},
    { "id": 25, "name": "Razer BlackShark V2 Pro", "price": 179.99, "description": "Wireless esports gaming headset", "specifications": { "Connection": "2.4GHz wireless" }, "image": "https://placehold.co/300x200?text=BlackShark+V2+Pro", "category": "Headphones"},
    { "id": 26, "name": "Jabra Elite 85h", "price": 249.99, "description": "Wireless headphones with ANC", "specifications": { "Battery life": "36 hours" }, "image": "https://placehold.co/300x200?text=Elite+85h", "category": "Headphones"},
    { "id": 27, "name": "Sennheiser Momentum 4", "price": 349.99, "description": "Premium headphones with long battery life", "specifications": { "Battery life": "60 hours" }, "image": "https://placehold.co/300x200?text=Momentum+4", "category": "Headphones"},
    { "id": 28, "name": "HyperX Cloud Alpha Wireless", "price": 199.99, "description": "Gaming headset with long battery life", "specifications": { "Battery life": "300 hours" }, "image": "https://placehold.co/300x200?text=Cloud+Alpha+Wireless", "category": "Headphones"},
    { "id": 29, "name": "Audio-Technica ATH-M50xBT2", "price": 199.99, "description": "Wireless version of the classic studio headphones", "specifications": { "Driver": "45mm" }, "image": "https://placehold.co/300x200?text=ATH-M50xBT2", "category": "Headphones"},
    { "id": 30, "name": "Marshall Monitor II ANC", "price": 319.99, "description": "Stylish headphones with ANC", "specifications": { "Battery life": "30 hours" }, "image": "https://placehold.co/300x200?text=Monitor+II+ANC", "category": "Headphones"},

    // Tablets
    { "id": 31, "name": "iPad Air M2", "price": 599.99, "description": "Thin and powerful tablet", "specifications": { "Screen Size": "10.9 inches" }, "image": "https://placehold.co/300x200?text=iPad+Air+M2", "category": "Tablet"},
    { "id": 32, "name": "Samsung Galaxy Tab S9 Ultra", "price": 1199.99, "description": "Premium Android tablet", "specifications": { "Display": "14.6-inch AMOLED" }, "image": "https://placehold.co/300x200?text=Tab+S9+Ultra", "category": "Tablet"},
    { "id": 33, "name": "Microsoft Surface Pro 10", "price": 1299.99, "description": "2-in-1 laptop tablet hybrid", "specifications": { "Processor": "Snapdragon X" }, "image": "https://placehold.co/300x200?text=Surface+Pro+10", "category": "Tablet"},
    { "id": 34, "name": "Lenovo Tab P12 Pro", "price": 899.99, "description": "High-performance Android tablet", "specifications": { "Screen Size": "12.6 inches" }, "image": "https://placehold.co/300x200?text=Tab+P12+Pro", "category": "Tablet"},
    { "id": 35, "name": "Amazon Fire HD 10", "price": 149.99, "description": "Affordable tablet for entertainment", "specifications": { "Storage": "64GB" }, "image": "https://placehold.co/300x200?text=Fire+HD+10", "category": "Tablet"},
    { "id": 36, "name": "Huawei MatePad Pro 12.6", "price": 899.99, "description": "High-end Android tablet with OLED display", "specifications": { "Screen": "12.6-inch OLED" }, "image": "https://placehold.co/300x200?text=MatePad+Pro+12.6", "category": "Tablet"},
    { "id": 37, "name": "Lenovo Yoga Tab 13", "price": 699.99, "description": "Tablet with built-in kickstand", "specifications": { "Screen": "13-inch" }, "image": "https://placehold.co/300x200?text=Yoga+Tab+13", "category": "Tablet"},
    { "id": 38, "name": "Amazon Fire Max 11", "price": 229.99, "description": "Affordable tablet with large display", "specifications": { "Screen": "11-inch" }, "image": "https://placehold.co/300x200?text=Fire+Max+11", "category": "Tablet"},
    { "id": 39, "name": "Xiaomi Pad 6 Pro", "price": 599.99, "description": "High-performance Android tablet", "specifications": { "Screen": "11-inch" }, "image": "https://placehold.co/300x200?text=Pad+6+Pro", "category": "Tablet"},
    { "id": 40, "name": "Realme Pad X", "price": 399.99, "description": "Affordable tablet with stylus support", "specifications": { "Screen": "10.95-inch" }, "image": "https://placehold.co/300x200?text=Pad+X", "category": "Tablet"},

    // Accessories
    { "id": 41, "name": "Logitech MX Master 3S", "price": 99.99, "description": "Advanced wireless mouse", "specifications": { "DPI": "8000" }, "image": "https://placehold.co/300x200?text=MX+Master+3S", "category": "Accessories"},
    { "id": 42, "name": "Keychron Q1 Pro", "price": 199.99, "description": "Premium mechanical keyboard", "specifications": { "Switches": "Gateron" }, "image": "https://placehold.co/300x200?text=Keychron+Q1+Pro", "category": "Accessories"},
    { "id": 43, "name": "Corsair K100 RGB", "price": 229.99, "description": "Mechanical gaming keyboard", "specifications": { "Polling rate": "8000Hz" }, "image": "https://placehold.co/300x200?text=Corsair+K100", "category": "Accessories"},
    { "id": 44, "name": "Razer DeathAdder V3 Pro", "price": 149.99, "description": "Ultra-lightweight gaming mouse", "specifications": { "Weight": "63g" }, "image": "https://placehold.co/300x200?text=DeathAdder+V3+Pro", "category": "Accessories"},
    { "id": 45, "name": "Elgato Stream Deck MK.2", "price": 149.99, "description": "Customizable LCD key controller", "specifications": { "Keys": "15 LCD keys" }, "image": "https://placehold.co/300x200?text=Stream+Deck+MK.2", "category": "Accessories"},
    { "id": 46, "name": "HyperX Alloy Origins", "price": 109.99, "description": "Compact mechanical gaming keyboard", "specifications": { "Switches": "HyperX Red" }, "image": "https://placehold.co/300x200?text=Alloy+Origins", "category": "Accessories"},
    { "id": 47, "name": "SteelSeries Apex Pro", "price": 199.99, "description": "Adjustable mechanical gaming keyboard", "specifications": { "Switches": "OmniPoint" }, "image": "https://placehold.co/300x200?text=Apex+Pro", "category": "Accessories"},
    { "id": 48, "name": "Logitech G502 X Plus", "price": 159.99, "description": "Wireless gaming mouse with RGB lighting", "specifications": { "DPI": "25,600" }, "image": "https://placehold.co/300x200?text=G502+X+Plus", "category": "Accessories"},
    { "id": 49, "name": "Corsair MM700 RGB", "price": 59.99, "description": "Extended RGB gaming mouse pad", "specifications": { "Size": "930mm x 400mm" }, "image": "https://placehold.co/300x200?text=MM700+RGB", "category": "Accessories"},
    { "id": 50, "name": "Razer Basilisk V3 Pro", "price": 169.99, "description": "Customizable wireless gaming mouse", "specifications": { "DPI": "30,000" }, "image": "https://placehold.co/300x200?text=Basilisk+V3+Pro", "category": "Accessories"}
];


module.exports = products
