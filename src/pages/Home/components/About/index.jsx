import React, { Component } from 'react';
import { Button } from '@alifd/next';

const getData = () => {
  return Array.from({ length: 3 }).map((item, index) => {
    return {
      index: `0${index + 1}`,
      title: '为什么选择我们？',
      desc: '我们专业制造高低压成套电器，高低压成套电器，高低压成套电器，高低压成套电器...',
      link: '#',
    };
  });
};

export default class About extends Component {
  static displayName = 'About';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.mainTitle}>ABOUT</div>
          <div style={styles.mainDesc}>关于浙江强驰电力</div>
          <div style={styles.tab}>
            {/* <div
              style={{ ...styles.tabName, ...styles.first, ...styles.active }}
            >
              企业级
            </div> */}
            {/* <div style={{ ...styles.tabName }}>个人级</div> */}
          </div>
          <div style={styles.items}>
            <div style={styles.tabWrap}>
              <div style={styles.companyInfo}>
                <h3 style={styles.companyInfotitle}>公司简介</h3>
                <div style={styles.companyInfotitleLine}>
                  <div style={styles.companyInfotitleHighlightLine}></div>
                </div>
                <p style={styles.companyInfodesc}>
                  浙江强驰电力有限公司是一家专业生产高、低压开关输配电设备以及高压电器元件的专业生产企业之一,集科研、开发、生产、销售、工程服务等为一体的全国无区域企业。
  公司主要生产：10KV-35KV、SF6负荷开关、SF6充气柜（全绝缘全密封共箱式环网柜）、SF6环网柜、电缆分支箱、户外开闭所、户外真空断路器、箱式变电站（欧式箱变、美式箱变、路灯箱变）中置柜、环网柜、消弧柜、低压抽出式开关柜、低压固定式开关柜、动力柜、配电箱、绝缘件、变压器（FLN36-12/630-20、FLN36-12RDll25-31.5、KLCG15-12、HXGN15-12、HXGN17-12、XGN15-12、XGN66-12、DFW-12、YNM-12/0.4、YBW-12/0.4、GGK、GGD、GCS、MNS、JP、XL-21、PZ30、ZWS-12、ZW32-12、ZW7-35、ZW43-12、ZW20-12、59-10、511-10）等一系列产品。
                </p>
                <Button
                  component="a"
                  href="#"
                  target="_blank"
                  style={styles.companyInfoextraButton}
                >
                  了解更多 &gt;
                </Button>
              </div>
            </div>
            <div style={styles.tabWrap}>
              {getData().map((item) => {
                return (
                  <div style={styles.tabList} key={item.index}>
                    <div style={styles.left}>
                      <div style={styles.num}>{item.index}</div>
                      <div style={styles.title}>{item.title}</div>
                    </div>
                    <div style={styles.middle}>
                      <div
                        style={styles.desc}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                    <div style={styles.btnBox}>
                      <a href={item.link} style={styles.btnLink}>
                        查看详情
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '50px 0',
    background: '#000',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  mainTitle: {
    fontSize: '60px',
    color: '#fff',
    letterSpacing: '0.77px',
    lineHeight: '72px',
    margin: '0',
    fontWeight: '700',
  },
  mainDesc: {
    fontSize: '24px',
    lineHeight: '30px',
    color: '#fff',
    marginTop: '8px',
    fontWeight: '700',
  },
  img: {
    marginTop: '70px',
    maxWidth: '100%',
  },
  tab: {
    position: 'absolute',
    right: '10px',
    top: '66px',
    overflow: 'hidden',
  },
  first: {
    marginTop: '0',
  },
  active: {
    color: '#fff',
    borderBottom: '1px solid #fff',
  },
  tabName: {
    float: 'left',
    cursor: 'pointer',
    fontSize: '26px',
    lineHeight: '30px',
    color: 'hsla(0,0%,100%,.5)',
    marginLeft: '30px',
    padding: '14px 0',
    borderBottom: '1px solid transparent',
    transition: 'all .3s',
  },
  items: {
    overflow: 'hidden',
    paddingTop: '50px',
    display: 'inline-flex',
    width: '100%',
  },
  tabWrap: {
    width: '50%'
  },
  tabList: {
    height: '80px',
    background: '#191a1e',
    position: 'relative',
    paddingRight: '40px',
    marginTop: '20px',
    transition: 'all .3s',
  },
  middle: {
    paddingLeft: '335px',
    paddingRight: '180px',
    height: '80px',
    overflow: 'hidden',
  },
  left: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '80px',
    overflow: 'hidden',
  },
  num: {
    float: 'left',
    fontSize: '42px',
    width: '80px',
    height: '80px',
    lineHeight: '80px',
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    background: '#236cff',
  },
  title: {
    float: 'left',
    maxWidth: '255px',
    fontSize: '20px',
    lineHeight: '80px',
    color: '#fff',
    paddingLeft: '40px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  desc: {
    fontSize: '14px',
    lineHeight: '24px',
    color: 'hsla(0,0%,100%,.8)',
    marginTop: '28px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  btnBox: {
    position: 'absolute',
    right: '40px',
    top: '20px',
  },
  btnLink: {
    display: 'inline-block',
    width: '160px',
    height: '40px',
    border: '1px solid #fff',
    lineHeight: '38px',
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all .3s',
  },
  companyInfo: {
    width: 400,
    marginRight: 90,
    marginTop: 10,
  },
  companyInfotitle: {
    color: '#223C4E',
    fontSize: 36,
  },
  companyInfotitleLine: {
    width: 140,
    height: 2,
    marginTop: 17,
    background: '#FFFFFF',
    borderLeft: '2px solid ##5fb2f8',
  },
  companyInfotitleHighlightLine: {
    background: '#3080FE',
    height: 2,
    width: 33,
  },
  companyInfodesc: {
    color: '#6D7A82',
    fontSize: 16,
    lineHeight: 1.5,
    marginTop: 24,
  },
  companyInfoextraButton: {
    marginTop: 35,
    borderColor: '#3080FE',
    background: 'transparent',
    color: '#3080FE',
  },
};
