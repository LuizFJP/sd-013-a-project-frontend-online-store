import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          { categories
            .map((categorie) => (
              <li
                data-testid="category"
                key={ categorie.id }
              >
                { categorie.name }
              </li>))}
        </ul>
      </aside>
    );
  }
}
CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};
export default CategoriesList;
