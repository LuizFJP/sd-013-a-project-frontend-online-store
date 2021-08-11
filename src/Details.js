import React from 'react';

class Details extends React.Component {
  render() {
    const { location : { state : { product : { title, thumbnail, price } } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="Foto do produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

export default Details;
