import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import kenzieImages from './carouselImages/imageNames/kenzie2022.json';
import dianeImages from './carouselImages/imageNames/diane2019.json';
import { Button, Divider } from 'antd';
import ImageCarousel from '../../components/ImageCarousel';
import { LeftOutlined } from '@ant-design/icons';

const kenzieInfo = {
  authorFolder: 'kenzie2022',
  title: 'McKenzie Verhulst (2022)',
  text: 'McKenzie Verhulst is a photographer based in Woodbury, MN.',
  href: (
    <a href="https://www.instagram.com/kenzie_captures/">
      McKenzie's Instagram
    </a>
  ),
  images: kenzieImages,
  displayName: 'BackViolin.jpg',
  buttonLink: 'mckenzie-verhulst-2022'
};

const dianeInfo = {
  authorFolder: 'diane2019',
  title: 'Diane Hallen (2019)',
  text: 'Diane Hallen is a fantastic photographer and school teacher who lives in Hudson, WI.',
  href: null,
  images: dianeImages,
  displayName: 'Mike4.jpg',
  buttonLink: 'diane-hallen-2019'
};

export default function SeeCollection() {
  const [currentGallery, setCurrentGallery] = useState(null);

  const { collectionName } = useParams();

  useEffect(() => {
    switch (collectionName) {
      case 'mckenzie-verhulst-2022':
        setCurrentGallery(kenzieInfo);
        break;
      case 'diane-hallen-2019':
        setCurrentGallery(dianeInfo);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      {currentGallery ? (
        <div>
          <h1 className="page-title">{currentGallery.title}</h1>
          <Divider></Divider>
          <ImageCarousel
            text={currentGallery.text}
            href={currentGallery.href}
            authorFolder={currentGallery.authorFolder}
            images={currentGallery.images}
          ></ImageCarousel>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1 className="page-title">Collection not found!</h1>
          <Link to="/see">
            <Button type="primary" icon={<LeftOutlined></LeftOutlined>}>
              Back to all collections
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
