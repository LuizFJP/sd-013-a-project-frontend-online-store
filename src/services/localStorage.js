export function getLocalStorageData(key) {
  const products = JSON.parse(localStorage.getItem(key)) || [];
  // console.log(products);
  return products;
}

export function setLocalStorageData(product) {
  const { id } = product;
  // console.log(id);
  // const id = 'cart';

  const products = getLocalStorageData(id);
  const setProducts = [...products, product];
  localStorage.setItem(id, JSON.stringify(setProducts));
  // console.log(localStorage);
}
