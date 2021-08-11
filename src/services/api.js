export async function getCategories() {
  // Implemente aqui
  try {
    const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const json = await fetchAPI.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    const json = await fetchAPI.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
