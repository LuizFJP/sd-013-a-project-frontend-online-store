import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.css/details.css';

export default class Details extends Component {
  render() {
    const { handleClose, show, product } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={ showHideClassName }>
        <section className="modal-main">
          <img src={ product.thumbnail } alt={ product.title } />
          <p
            data-testid="product-detail-name"
          >
            {`Produto:  ${product.title} `}
          </p>
          <p>{`Valor: ${product.price} `}</p>

          <button type="button" onClick={ handleClose } className="button-close">
            Close
          </button>
        </section>
      </div>
    );
  }
}
Details.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  product: PropTypes.arrayOf(PropTypes.shape()).isRequired,

};
