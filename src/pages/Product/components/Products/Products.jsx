import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Grid } from '@alifd/next';
import './index.scss';
const { Row, Col } = Grid;


export default class Products extends Component {
  static displayName = 'Products';

  static propTypes = {};

  static defaultProps = {};


  constructor(props) {
    super(props);
    this.state = {
        indexCurrent:0
    };
  }

   handleClick=(num) => {
    this.setState({
        indexCurrent: num
    });
    }

  renderProductItem = (item, index) => {
    return (
      <li class={index == this.state.indexCurrent?'current':''} onClick={()=> this.handleClick(index)}>{item.title}<i></i></li>
    );
  };
  renderProductItemDetail = (item, index) => {
    if(index == this.state.indexCurrent) {
        return (
        <div>{item.content}</div>
        );
    }
  };

  render() {
    return (
      <div style={styles.mainContent}>
        <div class="section-title wow">
            {/*<h2>产品中心</h2>*/}
            <p class="title">产品中心</p>
        </div>
        <div class="en-history">
            <ul class="en-history-nav">
                {dataSource.map(this.renderProductItem)}
            </ul>
            <div class="en-history-con">
                 {dataSource.map(this.renderProductItemDetail)}
            </div>
        </div>
      </div>
    );
  }
}

const dataSource = [
  {
    title: '环网柜',
    current:true,
    content:'环网柜',
  },
  {
    title: '充气柜',
    current:false,
    content:'充气柜',
  },
   {
    title: '固体柜',
    current:false,
    content:'固体柜',
  },
   {
    title: '中置柜',
    current:false,
    content:'中置柜',
  },
  {
    title: '箱变分支箱',
    current:false,
    content:'箱变分支箱',
  },
]
const styles = {
  mainContent:{
    width: '1200px',
    height: 'auto',
    background:'#f0f8fb',
    // background: '0% 0% / cover rgb(255, 255, 255)',
    overflow: 'hidden',
    textAlign: 'center',
    margin: '0px auto',
    marginTop: '78px',
    minHeight: '800px',
  },
  row: {
    margin: '0 10px 10px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardStyle: {
    display: 'flex',
    margin: '20px',
    padding: '0 30px',
  },
  card: {
    padding: '20px 10px',
  },
  paginationContainer: {
    marginTop: '25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};
