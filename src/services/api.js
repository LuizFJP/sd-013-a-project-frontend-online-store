export async function getCategories() {
  const url1 = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchUrl1 = await fetch(url1);

  return fetchUrl1.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url2 = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchUrl2 = await fetch(url2);

  return fetchUrl2.json();
}
