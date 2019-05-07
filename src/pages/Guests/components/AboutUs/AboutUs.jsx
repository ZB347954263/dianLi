import React, { Component } from 'react';

export default class AboutUs extends Component {
  static displayName = 'AboutUs';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-content-display" style={styles.container}>
        <div className="right-content-display-content" style={styles.content}>
          <div style={styles.col}>
            <img
              src={require('./images/logo.jpg')}
              alt="浙江强弛电力科技"
              style={styles.image}
            />
          </div>
          <div style={styles.col}>
            <h2 style={styles.title}>革新图强          驰名中外</h2>
            <p style={styles.description}>
              <p style={styles.p}>强驰电力科技有限公司坐落于著名“中国电气之城”---乐清，是一家以电力为主导、低压柜系列为配套，集设计、开发、生产、销售于一体的电力科技公司。</p>
              <p style={styles.p}>经过多年潜心经营，被誉为---中国电力专家。迈入中国顶级品牌的行列。</p>
              <p style={styles.p}>进入中国市场十多年来，本公司产品覆盖了国内近三十个省市、自治区，公司现有员工50多人，年生产组装能力2千件（套）；作为电力专家，集多年技术积淀和持续不断的核心研发优势，依靠独有专利技术，在智能配电系统解决方案、能源管理、以及针对数据中心设施一站式动力环境设施解决方案等节能增效领域日益展示出我们的实力</p>
              <p style={styles.p}>经营范围：全绝缘全封闭式SF6充气柜、环保气体柜、全绝缘全封闭固体绝缘柜、 六氟化硫半绝缘环网柜、箱式开闭所、SF6高压负荷开关 、电缆分支箱、高低压成套开关柜、高低压元器件 、箱式变电站等</p>
              <p style={styles.p}>企业行业：电力。成套(高压柜、低压柜、)</p>
              <p style={styles.p}>员工人数：50人</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  p: {
    textIndent: '2em',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 0',
  },
  content: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  col: {
    width: '48%',
    padding: '1%',
  },
  title: {
    textIndent: '2em',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  description: {
    color: '#999',
    lineHeight: '22px',
  },
  image: {
    width: '100%',
    margin: '0 auto',
    display: 'block',
    maxWidth: '400px',
  },
};
