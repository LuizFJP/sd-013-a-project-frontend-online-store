import React from 'react'
import * as api from '../services/api'

class Categories extends React.Component {
  constructor() {
    super()

    this.state = {
      categories: [],
    };

    this.categoriesList = this.categoriesList.bind(this)
  }

  componentDidMount() {
    this.categoriesList();
  }

  async categoriesList() {
    const request = await api.getCategories()
      this.setState({
        categories: request,
    })
  }

  render(){
    const { categories } = this.state;
    return(
      <nav>
        <ul>
              { categories.map((category) => (
                <li key={ category.id } data-testid="category">
                  {category.name}
                </li>))}
        </ul>
      </nav>
    )
  }
}

export default Categories;