import React from 'react';

class Product extends React.Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { img, price, title } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ img } alt="foto do produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

export default Product;
