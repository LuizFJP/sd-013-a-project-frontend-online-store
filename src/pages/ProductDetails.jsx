import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { price, title, thumbnail, attributes } = product;
    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <div>
            <span data-testid="product-detail-name">{title}</span>
          </div>
          <div>
            <span>
              R$
              {price}
            </span>
          </div>
          <div>
            <ul>
              {attributes.map((attri) => (
                <li key={ attri.name }>
                  {`${attri.name}: ${attri.value_name}`}
                </li>))}
            </ul>
          </div>
        </div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <h2>Avaliações</h2>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        price: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
