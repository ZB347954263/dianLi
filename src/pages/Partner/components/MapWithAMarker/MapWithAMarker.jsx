import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Map, Marker,InfoWindow } from 'react-amap';

// https://elemefe.github.io/react-amap/components/marker
export default class MapWithAMarker extends Component {
  render() {

    const config = {
      position : {
        longitude: 120.936687,
        latitude: 28.012977
      },
      content : '浙江强驰电力科技邮箱公司<br/>',
      visible:true,
      offset: [0, 0],
      size: {
        width: 200,
        height: 140,
      },
    }

    const html = `<div><p>浙江强驰电力科技邮箱公司</p><p>中国 浙江 乐清市象阳镇四板桥村四板桥工业区</p></div>`;

    return (
      <div style={styles.mainContent}>
        <IceContainer style={{ height: 800 }}>
          <div>
            <p>联系人：彭先生</p>
            <p>电     话：86 0577 61987230</p>
            <p>移动电话：13058105983</p>
            <p>地      址：中国 浙江 乐清市 象阳镇四板桥村四板桥工业区</p>
            <p>公司主页：http://www.qiangchidl.com
                   <br/>        https://qiangchidl.1688.com</p>
          </div>
          <Map plugins={['ToolBar']} center={config.position} zoom={15} >
            <Marker position={config.position} visible={config.visible} title={config.content}/>
            <InfoWindow
              position={config.position}
              visible={config.visible}
              isCustom={false}
              content={html}
              size={config.size}
              offset={config.offset}
            />
          </Map>
        </IceContainer>
      </div>
    );
  }
}

const styles ={
    mainContent:{
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '6px',
      height: '800px',
      width: '1200px',
      margin: '78px auto 20px auto',
    }
  }
