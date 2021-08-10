import React from 'react';

class Category extends React.Component {
  render() {
    const { data, data: { id }, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        <br />
        <input
          type="radio"
          onChange={ handleChange }
          name="category"
          id={ id }
          value={ id }
          data-testid="category"
        />
        { data.name }
      </label>
    );
  }
}

export default Category;
