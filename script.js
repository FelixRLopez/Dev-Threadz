function showAllProducts(products) {
  // forEach
  products.forEach((product) => newProductCard(product));
}

function getFilteredProducts(productNames, query) {
  // filter
  return productNames.filter((productName) => 
    productName.toLowerCase().includes(query.toLowerCase()));
}

const conversionRates = new Map();
conversionRates.set("usd", 1.0);
conversionRates.set("gbp", 0.19);
conversionRates.set("jpy", 151.35);

function getConvertedPrices(productPrices, currency) {
  // map
  return productPrices.map((productPrice) => 
    (productPrice * conversionRates.get(currency)).toFixed(2));
}

function getCartTotal(cartPrices) {
  // reduce
  return cartPrices.reduce((total, price) => total + price, 0);
}

showAllProducts(PRODUCTS);
