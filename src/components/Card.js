import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product" className="card-item">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ `imagem de(o) ${title}` } />
        <p>{ price }</p>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default Card;
