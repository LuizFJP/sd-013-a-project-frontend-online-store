import React from 'react';
import { getCategories } from '../../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = { cat: [] };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.showCategories = this.showCategories.bind(this);
  }

  componentDidMount() {
    this.showCategories();
  }

  async showCategories() {
    const arrObjsCat = await getCategories();
    const arrNamesCat = arrObjsCat.map((Obj) => Obj.name);
    this.setState({ cat: arrNamesCat });
    const { cat } = this.state;
    console.log(cat);
  }

  render() {
    const { cat } = this.state;
    return (
      <ul className="category">
        {cat.map((value) => (
          <li data-testid="category" key="cat">{value}</li>
        ))}
      </ul>
    );
  }
}
