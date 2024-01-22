import { Divider } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Listen() {
  const smallScreen = useMediaQuery({ query: '(max-width: 1080px)' });

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1 className="page-title">Listen to Mike</h1>
      <Divider></Divider>
      <div
        className="fade-in"
        style={
          !smallScreen
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'white',
                border: '5px solid #ff7d00',
                boxShadow: '0px 0px 5px 0px black',
                padding: 50,
                margin: 50
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'white',
                border: '5px solid #ff7d00',
                boxShadow: '0px 0px 5px 0px black',
                padding: 50,
                margin: 10
              }
        }
      >
        <h2 style={{ fontSize: '50px', color: 'var(--title-color)' }}>
          Catena String Quartet
        </h2>
        <iframe
          style={
            !smallScreen
              ? { width: '50vw', height: '30vw' }
              : { width: '40vh', height: '40vh' }
          }
          class="card-img-top"
          src="https://www.youtube.com/embed/78ROQZqGtxA?si=1Emh16jUjYa32-41"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p style={{ fontSize: '20px', padding: 20 }}>
          Playing violin with the Catena String Quartet is a dream come true for
          Mr. Miller. He has always found a special joy in chamber music. There
          is a special ability in such a setting to speak more personally
          through the music and deliver a deeper, meaningful performance.
          <br />
          <br /> See more of Mike's recordings on his{' '}
          <a href="https://www.youtube.com/channel/UCYT-un1xuD4-k0bAVKCbPMg">
            YouTube Channel
          </a>
          <br></br>
          And more of Catena String Quartet's on{' '}
          <a href="https://www.youtube.com/@CatenaStringQuartet">
            {' '}
            Catena String Quartet's YouTube Channel
          </a>
        </p>
      </div>
    </div>
  );
}
