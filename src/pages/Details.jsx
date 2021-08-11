import React, { Component } from 'react';
import '../style.css/details.css';

export default class Details extends Component {
  render() {
    const { handleClose, show, children, img, name, price } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={ showHideClassName }>
        <section className="modal-main">
          <img src={ img } alt={ name } />
          <p>{`Produto:  ${name} `}</p>
          <p>{`Valor: ${price} `}</p>
          {/* { children } */}
          <button type="button" onClick={ handleClose } className="button-close">
            Close
          </button>
        </section>
      </div>
    );
  }
}
