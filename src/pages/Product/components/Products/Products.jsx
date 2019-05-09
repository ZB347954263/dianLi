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
        <div>{item.content}
             {item.picList.map((pic, picIndex) => {
                return (
                    <img src={pic} alt={item.code} style={styles.pic}/>
                )
              })
             }
        </div>
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
    code: '1-KYN28A-12',
    title: '铠装移开式金属封闭开关设备',
    current:true,
    content:'铠装移开式金属封闭开关设备'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
  {
    code: '2-KYN28-12',
    title: '铠装中置式金属封闭开关设备',
    current:false,
    content:'铠装中置式金属封闭开关设备'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
  {
    code: '3-XGN66-12',
    title: '固定式封闭开关设备',
    current:false,
    content:'固体柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
   {
    code: '4-KYN61-40.5',
    title: '铠装移开式交流金属封闭开关设备',
    current:false,
    content:'铠装移开式交流金属封闭开关设备'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
  {
    code: '5-GGD',
    title: '交流电柜',
    current:false,
    content:'交流电柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
  {
    code: '6-GCS',
    title: '低压开关柜',
    current:false,
    content:'低压开关柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
  {
    code: '7-GCK',
    title: '低压开关柜',
    current:false,
    content:'低压开关柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  },
  {
    code: '8-GGJ',
    title: '低压电容柜',
    current:false,
    content:'低压电容柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
  ,{
    code: '9-MNS',
    title: '低压开关柜',
    current:false,
    content:'低压开关柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
  ,{
    code: '10-欧式箱变',
    title: '变电箱箱变',
    current:false,
    content:'变电箱箱变'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
  ,{
    code: '11-美式箱变',
    title: '变电箱箱变',
    current:false,
    content:'变电箱箱变'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
  ,{
    code: '12-JP柜',
    title: '综合配电箱',
    current:false,
    content:'综合配电箱'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
  ,{
    code: '13-XLF-21',
    title: '动力配电柜',
    current:false,
    content:'动力配电柜'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
  ,{
    code: '14-GZDW-06',
    title: '直流屏',
    current:false,
    content:'直流屏'
    ,picList:[
        require('./img/4.jpg'),
        require('./img/5.jpg'),
        require('./img/6.jpg')
    ]
  }
]
const styles = {
  mainContent:{
    width: '1300px',
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
  pic:{
      width:'100%',
      height:'auto',
  }
};
