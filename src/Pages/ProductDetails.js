import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cart from '../Images/cart.png';
import AddProductToCart from '../Components/AddProductToCart';
import Assesment from '../Components/Assesment';

class ProductDetails extends Component {
  render() {
    const { location: { state: { title, price, thumbnail, id } } } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt="Imagem do Produto" />
        R$
        <span>000.00</span>
        <AddProductToCart
          datatestid="product-detail-add-to-cart"
          productInfor={ { title, price, thumbnail, id } }
        />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ cart } alt="cart" width="30px" />
        </Link>
        <Assesment />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape().isRequired,
};
export default ProductDetails;
