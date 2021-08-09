export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCategories = await fetch(URL);
  const response = await fetchCategories.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchApi = await fetch(URL);
  const response = await fetchApi.json();

  return response;
}
