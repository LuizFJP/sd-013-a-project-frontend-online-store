import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import EmptyList from './EmptyList';

class CardsList extends React.Component {
  constructor(props) {
    super(props);

    this.populateCardList = this.populateCardList.bind(this);
  }

  populateCardList() {
    const { products } = this.props;

    return (
      products.map((product) => (<Card key={ product.id } product={ product } />))
    );
  }

  render() {
    const { searchIsCalled, products } = this.props;
    const isValid = (products.length !== 0);
    return (
      <div className="card-list">
        { isValid ? this.populateCardList() : <EmptyList validator={ searchIsCalled } /> }
      </div>
    );
  }
}

CardsList.propTypes = {
  searchIsCalled: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsList;
