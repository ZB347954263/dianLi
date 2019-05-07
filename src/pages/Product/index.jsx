import React, { Component } from 'react';
import PictureTextList from './components/PictureTextList';
import Products from './components/Products';


export default class Product extends Component {
  static displayName = 'Product';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Products/>
        {/*<PictureTextList/>*/}
      </div>
    );
  }
}
