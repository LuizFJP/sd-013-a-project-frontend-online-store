export function getLocalStorageData(key) {
  const products = JSON.parse(localStorage.getItem(key)) || [];
  return products;
}

export function setLocalStorageData(product) {
  const { key } = product;
  const products = getLocalStorageData(key);
  const setProducts = [...products, product];
  const setProductData = localStorage.setItem(key, JSON.stringify(setProducts));

  return setProductData;
}
