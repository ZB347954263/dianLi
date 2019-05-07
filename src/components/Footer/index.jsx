import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row wrap>
          <Col l="18">
            <p style={styles.title}>浙江强驰电力科技有限公司</p>
            <p style={styles.desc}>
            @2019 http://www.qiangchidl.com 浙江强驰电力科技有限公司版权所有
            </p>
            <p style={styles.desc}>
            <img
                src={require('./images/guohui.png')}
                alt=""
                style={styles.guohui}
              />鄂ICP备19006241号
            </p>
          </Col>
          <Col l="6">
            <div style={styles.rightContent}>
              <img
                src={require('./images/TB1fQ48QFXXXXc7XVXXXXXXXXXX-94-94.png')}
                alt=""
                style={styles.qrcode}
              />
              <div style={styles.textBox}>
                <p style={styles.subtit}>公众号</p>
                <p style={styles.text}>
                  微信扫码关注
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#0e0e0e',
    padding: '54px 0 70px',
  },
  content: {
    maxWidth: '1200px',
    margin: ' 0 auto',
  },
  title: {
    fontSize: '18px',
    lineHeight: '26px',
    color: '#fff',
  },
  desc: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#fff',
    textAlign: 'justify',
    marginTop: '14px',
    maxWidth: '830px',
  },
  guohui:{
    height:'14px',
    marginRight:'3px',
  },
  link: {
    color: '#00b7d3',
  },
  rightContent: {
    position: 'relative',
  },
  textBox: {
    paddingLeft: '100px',
  },
  qrcode: {
    width: '82px',
    height: '82px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  subtit: {
    fontWeight: '400',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '22px',
  },
  text: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '18px',
    marginTop: '6px',
  },
};
