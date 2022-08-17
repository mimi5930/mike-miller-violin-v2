import React, { useRef } from 'react';
import { Carousel, Image, Button } from 'antd';
import './see.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const images = [
  {
    name: 'BackViolin.jpg',
    alt: 'Mike, with his back turned to the camera, playing in the bushes'
  },
  {
    name: 'headshot.jpg',
    alt: 'Mike smiling with his violin in hand, facing the camera'
  },
  {
    name: 'upbowBow.jpg',
    alt: 'Mike beginning an up bow'
  },
  {
    name: 'violinUp.jpg',
    alt: 'Mike bringing his violin up to play'
  },
  {
    name: 'downbow.jpg',
    alt: 'Mike holding his violin ready to play with the frog of his bow right in front of his face'
  },
  {
    name: 'finale.jpg',
    alt: "Mike's bow is flying off the string in a dramatic swoosh!"
  },
  {
    name: 'sitting.jpg',
    alt: 'Mike is sitting in a chair, holding his violin and smiling at the camera'
  },
  {
    name: 'staring.jpg',
    alt: 'Mike holds his violin looking in the distance'
  },
  {
    name: 'pondering.jpg',
    alt: 'Mike stares down the fingerboard of his instrument'
  }
];

export default function See() {
  const carousel = useRef();

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '80px',
          color: 'var(--title-color)',
          marginBottom: 0
        }}
      >
        See
      </h1>
      <div style={{ margin: '10px 10vw' }}>
        <Carousel ref={carousel}>
          {images.map(image => {
            return (
              <div className="img-container">
                <Image
                  style={{
                    maxHeight: '50vh',
                    width: 'auto',
                    maxWidth: '100%',
                    background: 'var(--palette-maroon)'
                  }}
                  src={require(`./carouselImages/${image.name}`)}
                  alt={image.alt}
                ></Image>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div
        style={{
          marginRight: '10vw',
          marginLeft: '10vw',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          icon={<LeftOutlined />}
          style={{ marginRight: '20px' }}
          onClick={() => carousel.current.prev()}
        />
        <Button
          icon={<RightOutlined />}
          style={{ marginLeft: '20px' }}
          onClick={() => carousel.current.next()}
        />
      </div>
    </div>
  );
}
