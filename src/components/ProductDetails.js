import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { props: { location: { state: { dados } } } } = this;
    const { title, thumbnail, price } = dados;
    console.log(dados);
    return (
      <div className="product-card">
        <img src={ thumbnail } alt="Imagem de produto" />
        <p data-testid="product-detail-name">{ title }</p>
        <span>{ `Preço: ${price}` }</span>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
