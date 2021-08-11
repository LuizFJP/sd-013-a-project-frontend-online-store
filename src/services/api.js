export async function getCategories() {
<<<<<<< HEAD
  try {
    const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchAPI.json();
    return categories;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const categoryAndQuery = await fetchAPI.json();
    return categoryAndQuery;
  } catch (error) {
    return error;
=======
  // Implemente aqui
  try {
    const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const json = await fetchAPI.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query ) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    const json = await fetchAPI.json();
    return json;
  } catch (error) {
    console.log(error);
>>>>>>> main-group-15-reset
  }
}
