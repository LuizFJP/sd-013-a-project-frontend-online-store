import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localCart: '',
    };
  }

  componentDidMount() {
    const localCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (localCart) {
      this.getLocalStorageCart(localCart);
    }
  }

  getLocalStorageCart = (localCart) => {
    this.setState({
      localCart,
    });
  }

  createNewCart = (product) => {
    const newCart = [product];
    product.cartQuantity = 1;
    this.setState({
      localCart: newCart,
    });
    localStorage.setItem('shoppingCart', JSON.stringify(newCart));
  }

  checkLocalCart = (product) => {
    const localStorageCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const localProduct = localStorageCart.find((item) => product.id === item.id);
    if (localProduct) {
      
    } else {
     
    }
  }

  // addItemToCart(product) {
  //   if (localStorage.getItem('carrinho')) {
  //     const currentCart = JSON.parse(localStorage.getItem('carrinho'));
  //     let futureCart = [];
  //     const alreadyInCart = currentCart.some((item) => product.id === item.id);
  //     if (alreadyInCart) {
  //       currentCart.map((item) => {
  //         if (item.id === product.id) {
  //           item.quantity += 1;
  //           return item;
  //         }
  //         return item;
  //       });
  //       futureCart = [...currentCart];
  //     } else {
  //       product.quantity = 1;
  //       futureCart = [...currentCart, product];
  //     }
  //     localStorage.setItem('carrinho', JSON.stringify(futureCart));
  //   } else {
  //     product.quantity = 1;
  //     const cart = [product];
  //     localStorage.setItem('carrinho', JSON.stringify(cart));
  //   }
  // }

  addToCart(product) {
    const { localCart } = this.state;
    if (localCart) this.checkLocalCart(product);
    this.createNewCart(product);
  }

  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    document.title = 'product-details';

    return (
      <section className="productDetails">
        <p>{`R$ ${price}`}</p>
        <img alt="title" src={ thumbnail } />
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.addToCart(state) }
          >
            Adicionar no Carrinho
          </button>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
