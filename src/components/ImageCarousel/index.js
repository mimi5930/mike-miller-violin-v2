import React, { useRef } from 'react';
import { Carousel, Image, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function ImageCarousel({
  title,
  text,
  href,
  images,
  authorFolder
}) {
  const carouselRef = useRef();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',

          alignItems: 'center'
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '30px' }}>{title}</h2>
        <p
          style={{
            fontSize: '18px',
            marginBottom: '15px',
            textAlign: 'center'
          }}
        >
          {`${text} `}
          {href}
        </p>
        <Link to="/see">
          <Button type="primary" icon={<LeftOutlined />}>
            Back to All Collections
          </Button>
        </Link>
      </div>
      <div style={{ margin: '50px 15vw 20px' }}>
        <Carousel ref={carouselRef}>
          {images.map((image, index) => {
            return (
              <div className="img-container" key={index}>
                <Image
                  style={{
                    maxHeight: '50vh',
                    width: 'auto',
                    maxWidth: '100%',
                    background: 'var(--palette-maroon)'
                  }}
                  src={require(`../../pages/See/carouselImages/${authorFolder}/${image.name}`)}
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
          marginBottom: '5vh',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          icon={<LeftOutlined />}
          style={{ marginRight: '20px' }}
          onClick={() => carouselRef.current.prev()}
        />
        <Button
          icon={<RightOutlined />}
          style={{ marginLeft: '20px' }}
          onClick={() => carouselRef.current.next()}
        />
      </div>
    </>
  );
}
