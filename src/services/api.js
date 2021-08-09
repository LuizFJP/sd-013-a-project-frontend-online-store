export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const dataJson = await data.json();
  return dataJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const responseJson = await response.json();
  return responseJson;
}
