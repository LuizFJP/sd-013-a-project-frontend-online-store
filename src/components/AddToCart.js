import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddToCart extends Component {

    handleClick = () => {
        const { product } = this.props;
        const produto = {
            title: product.title,
            thumbnail: product.thumbnail, 
            price: product.price, 
            id: product.id,
            cartQuantity: 1,
        }
        this.addToCart(produto);
    }

    addToCart = (produto) => {

        const listaCompras = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
        const [localProduct, product] = this.productExists(listaCompras, produto);
    
        if (localProduct) {
            product.cartQuantity += 1;
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        } 
        shoppingCart = [...shoppingCart, product];
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
   
    productExists = (shoppingCart, product) => {
        const productFound = shoppingCart.find((item) => item.id === product.id)
        if(!productFound) return [false, product];
        return [true, productFound];
    }   

    render() {
        const { dataTestId } = this.props;

        return (
            <div>
                <button
                type="button"
                data-testid={ dataTestId }
                onClick={ () => this.handleClick() }
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        )
    }
}

AddToCart.propTypes = {
    product: PropTypes.shape({}),
    dataTestId: PropTypes.string,
}.isRequired;

export default AddToCart;
