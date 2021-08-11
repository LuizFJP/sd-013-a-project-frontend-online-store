import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.state = {
      objProduct: {},
    };
  }

  handleClick = ({ target }) => {
    const title = target.parentNode.firstChild.innerText;
    const img = target.parentNode.firstChild.nextSibling.getAttribute('src');
    const price = target.parentNode.firstChild.nextSibling.nextSibling.innerText;
    // console.log(title);
    const objProduct = {
      title,
      img,
      price,
    };
    this.setState({
      objProduct,
    });
    const { sendToMain } = this.props;
    sendToMain(objProduct);
    console.log(objProduct);
  }

  render() {
    const { card } = this.props;
    const { title, thumbnail, price } = card;
    return (
      <div data-testid="product">
        <h3 ref={this.title}>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-add-to-car"
          onClick={this.handleClick}
        >
          Adicionar ao carrinho
        </button>
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
