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
          Into Orbit
        </h2>
        <iframe
          style={
            !smallScreen
              ? { width: '50vw', height: '30vw' }
              : { width: '40vh', height: '40vh' }
          }
          class="card-img-top"
          src="https://www.youtube.com/embed/vZfoGfIU7K0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p style={{ fontSize: '20px', padding: 20 }}>
          Working with Wenbin Lyu on this trio was such a rewarding experience.
          The two movements contrast with a beautiful, searching first movement
          followed by a fast and fearless finale. I felt like a rock star!
          Premiering this work with my close friends, Xinqu Li and Nicholas
          Johnson, made the project so fun and special to me.
          <br />
          <br /> See more of Mike's recordings on his{' '}
          <a href="https://www.youtube.com/channel/UCYT-un1xuD4-k0bAVKCbPMg">
            YouTube Channel
          </a>
        </p>
      </div>
    </div>
  );
}
