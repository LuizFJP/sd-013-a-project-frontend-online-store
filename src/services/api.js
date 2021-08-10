export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((r) => r.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && !query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((r) => r.json())
      .then((r) => r.results);
  }
  if (!categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((r) => r.json())
      .then((r) => r.results);
  }
  if (!categoryId && !query) {
    return {};
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((r) => r.json())
    .then((r) => r.results);
}
