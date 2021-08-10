import React from 'react';
import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     id: '',
  //     name:'',
  //   };
  // }

  render() {
    const { name } = this.props;

    return (
      <div>
        <p data-testid="category">
          { name }
        </p>
      </div>
    );
  }
}

CategorieCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default CategorieCard;
