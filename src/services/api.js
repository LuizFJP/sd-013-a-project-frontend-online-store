export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJson = await categories.json();

  return categoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categoriesJson = await categories.json();

  return categoriesJson;
}
