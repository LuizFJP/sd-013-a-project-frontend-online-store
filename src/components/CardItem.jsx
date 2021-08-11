import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { card } = this.props;
    const { title, thumbnail, price } = card;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

CardItem.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardItem;
