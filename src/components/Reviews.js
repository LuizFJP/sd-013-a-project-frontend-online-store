import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: undefined,
    };
  }

  componentDidMount() {
    this.RenderReviews();
  }

  RenderReviews = () => {
    const { id } = this.props;

    if (!localStorage.getItem(id)) return;

    const reviews = JSON.parse(localStorage[id]);

    const reviewList = reviews.map((r) => (
      <div className="review-container" key={ r.email }>
        <span className="review-email">{ r.email }</span>
        <Rating className="review-rating" readOnly="true" value={ r.rating } />
        <p className="review-message">{ r.message }</p>
      </div>
    ));

    this.setState({ reviewList });
  }

  render() {
    const { reviewList } = this.state;
    return (
      <div className="reviews-container">
        { !reviewList ? <span>Sem Avaliações</span>
          : reviewList }
      </div>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.string,
};

Reviews.defaultProps = {
  id: '',
};

export default Reviews;
