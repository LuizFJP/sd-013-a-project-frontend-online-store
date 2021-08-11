export async function getCategories() {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    return (await fetch(url)).json();
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    return (await fetch(url)).json();
  } catch (error) {
    console.log(error);
  }
}
