import React from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchApiID(id, '');
  }

  fetchApiID = async (categoryId, query = '') => {
    const requestProducts = await API.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ product: requestProducts.results });
  }

  showProductDetails = (productId) => {
    const { product } = this.state;
    const showIdProduct = product.find((produ) => produ.id === productId);
    const { price, title, thumbnail, description } = showIdProduct;
    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <span>{title}</span>
          <p>{description}</p>
          <span>
            R$
            {price}
          </span>
        </div>
      </div>
    );
  }

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        { this.showProductDetails(id)}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
