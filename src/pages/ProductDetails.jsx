import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgCarShop from '../image/shopping-cart_icon-icons.com_60593.svg';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     carrinho: [], // coloquei o this.state pra poder ter acesso ao link do carrinho de compras
  //   };
  // }

  onClick = () => {
    const { addToCart, product } = this.props;
    console.log(addToCart);
    addToCart(product); // entender de que forma posso usar isso
  }

  render() {
    const { location: { state: { product } } } = this.props;
    // const { carrinho } = this.state;
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
          { /* Adicionei o botão agora é preciso criar uma lógica onde ao clicar recebe
           o produto no link */}
          <button
            type="submit"
            data-testid="product-add-to-cart"
            onClick={ this.onClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <div>
          { /* coloquei o link pra rotacionar na página carShop */}
        </div>
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
