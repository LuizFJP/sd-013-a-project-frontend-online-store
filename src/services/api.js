export async function getCategories() {
  const request1 = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const results1 = await request1.json();

  return results1;
}

export async function getProductsFromCategoryAndQuery(categoryId='', query='') {
  const request2 = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const results2 = await request2.json();

  return results2;
}
