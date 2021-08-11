import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);

    this.setChange = this.setChange.bind(this);
    this.adicionar = this.adicionar.bind(this);

    this.state = {
      email: '',
      nota: '',
      textValue: '',
      concate: [],
    };
  }

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    JSON.parse(localStorage.getItem('list'));
  }

  setChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  adicionar() {
    const { email, nota, textValue, concate } = this.state;
    this.setState({
      email: '',
      nota: '',
      textValue: '',
      concate: [].concat(concate, email, nota, textValue),
    });
  }

  render() {
    const { email, textValue, concate } = this.state;
    return (
      <div>
        <form data-testid="product-detail-evaluation">
          <h3>Avaliações</h3>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                value={ email }
                placeholder="Email"
                onChange={ this.setChange }
              />
            </label>
            <lebal htmlFor="1">
              1
              <input type="radio" value="1" name="nota" onChange={ this.setChange } />
            </lebal>
            <label htmlFor="2">
              2
              <input type="radio" value="2" name="nota" onChange={ this.setChange } />
            </label>
            <label htmlFor="3">
              3
              <input type="radio" value="3" name="nota" onChange={ this.setChange } />
            </label>
            <label htmlFor="4">
              4
              <input type="radio" value="4" name="nota" onChange={ this.setChange } />
            </label>
            <label htmlFor="5">
              5
              <input type="radio" value="5" name="nota" onChange={ this.setChange } />
            </label>
          </div>
          <div>
            <textarea
              onChange={ this.setChange }
              value={ textValue }
              name="textValue"
              rows="5"
              cols="50"
              placeholder="Comentário"
            />
          </div>
          <div>
            <button type="button" onClick={ this.adicionar }>Avaliar</button>
          </div>
        </form>
        <ul>
          { concate.map((element) => <li key={ element }>{ element }</li>)}
          { localStorage.setItem('list', concate.map((element) => element)) }
        </ul>
      </div>
    );
  }
}

export default Review;
