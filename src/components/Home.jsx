import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label
            type="text"
            data-testid="home-initial-message"
            htmlFor="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Home;
