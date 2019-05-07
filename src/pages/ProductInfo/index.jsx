import React, { Component } from 'react';
import RightContentDisplay from './components/RightContentDisplay';


export default class ProductInfo extends Component {
  static displayName = 'ProductInfo';

  static propTypes = {};

  static defaultProps = {};

  componentWillMount(){
      //console.log(this.props.location)//传递过来的所有参数
      console.log(this.props.location.state.id)//val值
  }

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
