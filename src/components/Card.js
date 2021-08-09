import React from 'react';

class Card extends React.Component {
  render() {
    const { component } = this.props;
    const { results: { title , price , thumbnail }  } = component;
    console.log(title, price, thumbnail);
    console.log(component);
    return (
      <div>
        <p>{ title }</p>
        <img src={ thumbnail } alt={`imagem de(o) ${title}`} />
        <p>{ price }</p>
      </div>
    );
  }
}

export default Card;
