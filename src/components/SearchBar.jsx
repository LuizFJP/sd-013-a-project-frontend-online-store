import React from 'react';

class SeachBar extends React.Component {
  render() {
    const { query, handleQuery, handleClick } = this.props;
    return (
      <div>
        <label htmlFor="Product-Search">
          <input
            type="text"
            data-testid="query-input"
            name="Product-Search"
            placeholder="Digite o nome do produto"
            value={ query }
            onChange={ handleQuery }
          />
          <button
            type="submit"
            data-testid="query-button"
            name="Product-Search"
            onClick={ handleClick }
          >
            Buscar:
          </button>
        </label>
      </div>
    );
  }
}

export default SeachBar;
