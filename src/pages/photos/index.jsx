import React, { Component } from 'react';
import imgView from './components/imgView';

export default class PhotosPage extends Component {
  static displayName = 'PhotosPage';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <imgView />
      </div>
    );
  }
}
