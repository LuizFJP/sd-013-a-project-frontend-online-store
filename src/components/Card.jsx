import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Details from '../pages/Details';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { searchResults } = this.props;
    const { show } = this.state;

    return (
      <div>
        { searchResults
          .map((result) => (
            <div key={ result.id } data-testid="product">
              <img src={ result.thumbnail } alt={ result.title } />
              <p>{`Produto:  ${result.title} `}</p>
              <p>{`Valor: ${result.price} `}</p>

              <Details
                show={ show }
                handleClose={ this.hideModal }
                img={ result.thumbnail }
                name={ result.title }
                price={ result.price }
              />

              <div>
                <button
                  type="button"
                  onClick={ () => this.showModal() }
                >
                  Open
                </button>

              </div>
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
