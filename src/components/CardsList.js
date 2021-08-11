import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import EmptyList from './EmptyList';

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
    };
    this.populateCardList = this.populateCardList.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(product) {
    const { shoppingCart } = this.state;
    const checkShoppingCart = shoppingCart.find(({ id }) => id === product.id);

    if (!checkShoppingCart) {
      const cartItem = {
        qnt: 1,
        object: product,
        id: product.id,
      };

      this.setState((previousState) => {
        const newState = [...previousState.shoppingCart, cartItem];
        localStorage.setItem('shoppingCart', JSON.stringify(newState));

        return {
          shoppingCart: newState,
        };
      });
    } else {
      const newShoppingCart = shoppingCart.map((item) => {
        if (item.id === product.id) {
          item.qnt += 1;
        }
        return item;
      });
      this.setState({
        shoppingCart: newShoppingCart,
      }, () => localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart)));
    }
  }

  populateCardList() {
    const { products } = this.props;

    return (
      products.map((product) => (
        <Card
          key={ product.id }
          product={ product }
          handleAddProduct={ this.handleAddProduct }
        />
      ))
    );
  }

  render() {
    const { searchIsCalled, products } = this.props;
    const isValid = (products.length !== 0);
    return (
      <div className="card-list">
        { isValid ? this.populateCardList() : <EmptyList validator={ searchIsCalled } /> }
      </div>
    );
  }
}

CardsList.propTypes = {
  searchIsCalled: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsList;
