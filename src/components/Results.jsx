import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Results extends React.Component {
  render() {
    const { searchResults } = this.props;
    console.log(searchResults);
    if (searchResults.length === 0) return <p>Nenhum produto foi encontrado</p>;
    return <Card searchResults={ searchResults } />;
  }
}

Results.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Results;
