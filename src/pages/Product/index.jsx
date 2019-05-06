import React, { Component } from 'react';
import PictureTextList from './components/PictureTextList';


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
        <PictureTextList/>
      </div>
    );
  }
}
