export async function getCategories() {
  const getApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await getApi.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getCategoryQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await getCategoryQuery.json();
  return response;
}
