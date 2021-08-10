import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   result: props.resultadoDoPai,
  //   // };
  // }

  ifNotResult = () => (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  ifResult = () => {
    const { resultadoDoPai } = this.props;
    return (resultadoDoPai.map((res) => (
      <li data-testid="product" key={ res.id }>
        <h2>{res.title}</h2>
        <img src={ res.thumbnail } alt={ res.title } />
        <span>{res.price}</span>
      </li>)));
  }

  render() {
    const { produto } = this.props;
    const { ifResult, ifNotResult } = this;
    return (
      <div>
        { !produto ? ifNotResult() : ifResult() }
      </div>
    );
  }
}

ProductList.propTypes = {
  resultadoDoPai: PropTypes.arrayOf(PropTypes.object).isRequired,
  produto: PropTypes.string.isRequired,
};

export default ProductList;
