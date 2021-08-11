import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import EmptyList from './EmptyList';

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
    }
    this.populateCardList = this.populateCardList.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  populateCardList() {
    const { products } = this.props;

    return (
      products.map((product) => (
      <Card key={ product.id }
        product={ product } handleAddProduct={ this.handleAddProduct }
      />
    ))
    );
  }

  handleAddProduct (product) {
    const checkShoppingCart = this.state.shoppingCart.find(({id}) => id === product.id);
    console.log(checkShoppingCart);
    if(!checkShoppingCart) {
      const cartItem = {
        qnt: 1,
        object: product,
        id: product.id,
      }

      this.setState((previousState) => {
        const newState = [...previousState.shoppingCart, cartItem]
        localStorage.setItem('shoppingCart', JSON.stringify(newState))

        return {
          shoppingCart : [...previousState.shoppingCart, cartItem],
        }
      });
    
     } 
    // else {
    //   const {shoppingCart} = this.state;
    //   shoppingCart.find(({object}) => )
    // }  
  }

  // handleAddProduct (product) {
  //   const checkShoppingCart = this.state.shoppingCart.find((item) => {
  //    console.log(item); 
  //    return item.id === product.id
  //   });
    
  //   if(!checkShoppingCart) {
  //     const cartItem = {
        
  //       [product.id]:{
  //         qnt: 1,
  //         object: product,
  //         id: product.id,
  //       }
  //     }

  //     this.setState((previousState) => {
  //       const newState = [...previousState.shoppingCart, cartItem]
  //       localStorage.setItem('shoppingCart', JSON.stringify(newState))

  //       return {
  //         shoppingCart : [...previousState.shoppingCart, cartItem],
  //       }
  //     });
    
  //    } 
  //   // else {
  //   //   const {shoppingCart} = this.state;
  //   //   shoppingCart.find(({object}) => )
  //   // }  
  // }

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
