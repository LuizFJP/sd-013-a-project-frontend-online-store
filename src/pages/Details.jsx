import React, { Component } from 'react';
import '../style.css/details.css';

export default class Details extends Component {
  render() {
    const { handleClose, show, children, product} = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={ showHideClassName }>
        <section className="modal-main">
          <img src={ product.thumbnail } alt={ product.title } />
          <p 
          data-testid="product-detail-name">
            {`Produto:  ${product.title} `}
            </p>
          <p>{`Valor: ${product.price} `}</p>
          {/* { children } */}
          <button type="button" onClick={ handleClose } className="button-close">
            Close
          </button>
        </section>
      </div>
    );
  }
}
