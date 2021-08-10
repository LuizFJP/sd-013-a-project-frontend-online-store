import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class ProductCard extends Component {
    render() {

        const { product } = this.props;
        const { id, title, thumbnail, price } = product;

        return (

            <div className="product-card" data-testid="product">
                
            </div>
        )
    }
}


export default ProductCard;

