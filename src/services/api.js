export async function getCategories() {
  const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchAPI.json();
  // const result = await categories
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const getFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const getProducts = await getFetch.json();
  return getProducts;
}
