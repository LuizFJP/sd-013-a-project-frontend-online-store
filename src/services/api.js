// Rodrigo Pova, Luiz Furtado, Danilo Uehara, Felipe Chagas, Filipe Candido
export async function getCategories() {
  try {
    const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await request.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

// Rodrigo Pova, Luiz Furtado, Danilo Uehara, Felipe Chagas, Filipe Candido
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    const results = await request.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
