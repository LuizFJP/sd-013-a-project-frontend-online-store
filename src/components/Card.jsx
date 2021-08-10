import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div>
        { searchResults
          .map((result) => (
            <div key={ result.id } data-testid="product">
              <img src={ result.thumbnail } alt={ result.title } />
              <p>{`Produto:  ${result.title} `}</p>
              <p>{`Valor: ${result.price} `}</p>
            </div>
          ))}
      </div>
    );
  }
}

Card.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Card;
