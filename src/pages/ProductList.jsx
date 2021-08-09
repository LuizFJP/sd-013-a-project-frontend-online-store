import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDudMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { categoryId, query } = this.props;
    this.setState(async () => {
      const requestProducts = await getProductsFromCategoryAndQuery(categoryId, query);
      this.setState({ products: [...requestProducts] });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div data-testid="product-list">
        {products.map((product) => <ProductCard key={ product.id } product={ product } />)}
      </div>
    );
  }
}

export default ProductList;
