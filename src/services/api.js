export async function getCategories() {
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((resolve) => resolve.json().then((data) => data));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`)
    .then((response) => response.json().then((data) => data));
}
