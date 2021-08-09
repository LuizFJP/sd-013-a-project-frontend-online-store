import React, { Component } from 'React';

class CardItem extends Component {
  render() {
    const { card: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

export default CardItem;
