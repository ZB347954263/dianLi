import React, { Component } from 'react';
import list from './data';
import PageFlip from '../../src/pageFlip';
import './index.scss';

export default class imgView extends Component {
  static displayName = 'imgView';

  static propTypes = {};

  static defaultProps = {};

  static list = list;
  static ele = {
    $book: $('.book')[0],
    $pages: $('.pages'),
  }
  // 翻页的实例
  static pageflip;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <body>
        <div class="book">
            <div class="pages">
            </div>
        </div>
    </body>
    );
  }
  
  init() {
    console.log(this.ele.$pages);
    this.renderCurrentPage();
    console.log(this.ele.$pages);
    debugger;
    this.pageflip = new PageFlip({
      book: this.ele.$book,
      pages: Array.from(this.ele.$pages.children()),
    })
  }

  /**
  * 渲染当前页
  */
  renderCurrentPage() {
    this.ele.$pages.html('');
    this.list.forEach(ele => {
      let currentDateEle = this.genPageElement(ele);
      this.ele.$pages.append(currentDateEle);
    });
  }

  /**
   * 生成根据数据渲染后的模版
   */
  genPageElement(item) {
    let element = document.createElement('div');
    $(element).addClass('page');
    element.innerHTML = '<img src="/assets/' + item.img + '">';
    return element;
  }

  /**
   * 当页面变化之后重置翻页
   * @param {number} page 要翻到的页数
   */
  resetPages(page) {
    let $pages = $('.page');
    this.pageflip.resetPages(Array.from($pages));
    this.pageflip.turnToPage(page);
  }
}

const styles = {
  html: {
    backgroundColor: rgb(245, 224, 178)
  },
  book: {
    margin: '50px auto',
    width: '1000px',
    height: '1600px'
  },
  pages:{
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    listStyle: none,
    overflow: hidden
  },
 page:{
    display: 'flex',
    justifyContent: center,
    alignItems: center,
    backgroundColor: '#fff',
    fontSize: '500px',
    borderRadius: '0.29867rem',
    overflow: hidden,
    willChange: transform
  }
};
