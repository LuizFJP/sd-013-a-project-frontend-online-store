import React from 'react';
import { getCategories } from '../../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.showCategories = this.showCategories.bind(this);
  }

  componentDidMount() {
    this.showCategories();
  }

  async showCategories() {
    const arrObjsCat = await getCategories();
    const arrNamesCat = arrObjsCat.map((Obj) => Obj.name);
    arrNamesCat.forEach((name) => {
      const LI = document.createElement('li');
      LI.innerText = name;
      console.log(LI);
    });
  }

  render() {
    return (
      <ul className="category">
        a
      </ul>
    );
  }
}
