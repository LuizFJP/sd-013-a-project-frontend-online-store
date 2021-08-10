import React from 'react';

class SeachBar extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Product-Search">
          <input
            type="text"
            data-testid="query-input"
            name="Product-Search"
          />
          <button
            type="submit"
            data-testid="query-button"
            name="Product-Search"
          >
            Buscar:
          </button>
        </label>
      </div>
    );
  }
}

export default SeachBar;
