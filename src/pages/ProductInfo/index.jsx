import React, { Component } from 'react';
import RightContentDisplay from './components/RightContentDisplay';


export default class ProductInfo extends Component {
  static displayName = 'ProductInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RightContentDisplay/>
      </div>
    );
  }
}
