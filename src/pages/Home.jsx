import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
// Rodrigo Pova, Luiz Furtado, Filipe Cândido, Felipe Chagas, Danilo Uehara
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      categoryId: '',
      requestButton: false
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  handleSubmit = () => {
    this.setState({ requestButton: !(this.state.requestButton)});
  }

  render() {
    const { query, categoryId, requestButton } = this.state;
    return (
      <div>
        <SearchBar onChange={ this.handleChange } onSubmit= { this.handleSubmit} />
        {requestButton && <ProductList query={ query } categoryId={ categoryId } />}
      </div>
    );
  }
}

export default Home;
