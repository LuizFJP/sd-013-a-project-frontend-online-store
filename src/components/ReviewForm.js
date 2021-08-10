import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starValue: '',
    };
  }

  GetStarValue = (evt, value) => {
    this.setState({ starValue: value });
  }

  SaveReview = () => {
    const { starValue } = this.state;
    const { id } = this.props;

    const email = document.querySelector('.revForm-email').value;
    const rating = starValue;
    const message = document.querySelector('.revForm-message').value;

    const review = { email, rating, message };

    if (localStorage[id]) {
      const reviewArray = JSON.parse(localStorage[id]);
      localStorage[id] = JSON.stringify([...reviewArray, review]);
    } else {
      localStorage[id] = JSON.stringify([review]);
    }
  }

  render() {
    return (
      <div className="revForm-container">
        <h3>Avalicações</h3>
        <form className="revForm-form">
          <input className="revForm-email" type="email" placeholder="Email" required />
          <Rating
            className="revForm-Rating"
            precision={ 0.5 }
            onChange={ this.GetStarValue }
            required
          />
          <textarea
            className="revForm-message"
            data-testid="product-detail-evaluation"
            name="message"
            id="review"
            cols="30"
            rows="10"
            placeholder="Mensagem (opcional)"
          />
          <button
            className="revForm-button"
            type="button"
            onClick={ this.SaveReview }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  id: PropTypes.string,
};

ReviewForm.defaultProps = {
  id: '',
};

export default ReviewForm;
