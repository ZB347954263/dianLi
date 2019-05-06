import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Map, Marker } from 'react-amap';

// https://elemefe.github.io/react-amap/components/marker
export default class MapWithAMarker extends Component {
  render() {
    const position = {
      longitude: 120.026208,
      latitude: 30.279212,
    };

    return (
      <div style={styles.mainContent}>
        <IceContainer style={{ height: 600 }}>
          <Map plugins={['ToolBar']} center={position} zoom={15}>
            <Marker position={position} />
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
      height: '600px',
      width: '1200px',
      margin: '78px auto 20px auto',
    }
  }
