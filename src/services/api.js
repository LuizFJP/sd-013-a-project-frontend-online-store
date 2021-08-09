export async function getCategories() {
  const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await requestReturn.json();
  return categories;
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY');
  const categoryAndQuery = await requestReturn.json();
  return categoryAndQuery;
}
// - Para buscar itens de uma categoria por termo:
//   - Tipo da requisição: `GET`
//   - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
//   - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
//   - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
