import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Details from '../pages/Details';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      product:{}
    };
  }

  showModal = (e) => {
    console.log(e);
    this.setState({ 
      show: true,
      product:e
     });
  };

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { searchResults } = this.props;
    const { show, product } = this.state;

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
                product={ product }
              />

              <div>
                <button
                  data-testid='product-detail-link'
                  type="button"
                  onClick={ () => this.showModal(result) }
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
