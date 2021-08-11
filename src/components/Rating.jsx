import React from 'react';
import Review from './Review';

class Rating extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rate: 0,
      message: '',
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    const previousReviews = JSON.parse(localStorage.getItem('rating'));
    if (previousReviews !== null) {
      localStorage.setItem('rating', JSON.stringify([...previousReviews, this.state]));
    } else {
      localStorage.setItem('rating', JSON.stringify([this.state]));
    }
    this.setState({
      email: '',
      rate: 0,
      message: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const reviews = JSON.parse(localStorage.getItem('rating'));
    const { email, message, rate } = this.state;
    return (
      <div>
        <form action="">
          <div>
            <input
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
              id="email-input"
              placeholder="Email"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="rate-input">
              Nota:
              <input
                name="rate"
                value={ rate }
                onChange={ this.handleChange }
                required
                id="rate-input"
                max="5"
                type="number"
              />
            </label>
          </div>
          <div>
            <input
              data-testid="product-detail-evaluation"
              name="message"
              value={ message }
              onChange={ this.handleChange }
              id="message"
              placeholder="Mensagem (opcional)"
              type="text"
            />
          </div>
          <button type="submit" onClick={ this.handleClick }>Avaliar</button>
        </form>
        <div />
        {reviews !== null
          ? reviews.map((review) => <Review key={ review.email } info={ review } />)
          : <p>Sem avaliações no momento</p>}
      </div>
    );
  }
}

export default Rating;
