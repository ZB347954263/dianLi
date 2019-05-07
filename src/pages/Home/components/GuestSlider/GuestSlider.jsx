import React, { Component } from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Link} from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

import MOCK_DATA from './data';



export default class GuestSlider extends Component {
  static displayName = 'GuestSlider';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      className: 'product-slider',
      autoplay: true,
      centerMode: true,
      
      infinite: true,
      centerPadding: '0',
      slidesToShow: 5,
      speed: 10,
    };
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h3 style={styles.hyThirdPartyTitle}>
              推荐产品
            <a style={styles.thirdPartyMore} href="#">
              <Link to='/product'>更多...</Link>
            </a>
          </h3>
          <Slider {...settings}>
            {MOCK_DATA.map((item, index) => {
              return (
                <div style={styles.item} key={index}>
                  <div style={styles.itemBox}>
                    <img src={item.avatar} alt="" style={styles.img} />
                    <div style={styles.info}>
                      <h4 style={styles.name}>{item.name}</h4>
                      <p style={styles.job}>
                        <a href="#">
                          <Link to= {{path: '/productInfo', pathname : '/productInfo', state : { id: item.id }}} >{item.job}</Link>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '425px',
    background: '#ffffff',
    backgroundSize: 'cover',
    overflow: 'hidden',
    textAlign: 'center',
    width: '1200px',
    margin: '0px auto'
  },
  content:{
     textAlign: 'center',
    width: '1200px',
    margin: '0 auto',
  },
  hyThirdPartyTitle: {
    position: 'relative',
    fontFamily: 'Microsoft YaHei',
    fontSize: '26px',
    lineHeight: '40px',
    color: '#000',
    fontWeight: '400',
    verticalAlign: 'middle',
    marginBottom: '40px',
  },
  thirdPartyMore: {
    position: 'absolute',
    right: '0',
    top: '12px',
    color: '#108ee9',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    textDecoration: 'none',
  },
  item: {
    float: 'left',
    display: 'inline-block',
  },
  itemBox: {
    position: 'relative',
  },
  info: {
    position: 'absolute',
    left: '10%',
    width: '80%',
    top: '240px',
    textAlign: 'left',
    overflow: 'hidden',
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: '#e1f3fd',
    opacity: '0.7',
    zIndex: '10',
  },
  name: {
    margin: '0',
    color: '#000000',
    lineHeight: '26px',
    fontSize: '18px',
  },
  job: {
    color: 'rgb(35, 108, 255)',
    lineHeight: '16px',
    fontSize: '12px',
  },
  img: {
    maxWidth: '98%',
    display: 'inline-block',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
  },
};
