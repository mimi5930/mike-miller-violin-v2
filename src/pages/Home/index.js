import React from 'react';

const styles = {};

export default function Home() {
  return (
    <div style={{ height: 'calc(100vh - 100px)', backgroundColor: '#ffecd1' }}>
      <div
        style={{
          height: '100%',
          width: '100vw',
          backgroundColor: '#010101',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src={require('../../images/hero.jpg')}
          alt="Mike looking down the fingerboard of his violin"
          style={{
            height: '100%'
            // border: '10px solid #ff7d00'
          }}
        ></img>
      </div>
    </div>
  );
}
