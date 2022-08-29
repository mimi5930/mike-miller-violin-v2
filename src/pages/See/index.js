import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import './see.css';
import ImageCarousel from '../../components/ImageCarousel';
import { useParams } from 'react-router-dom';
import ImageCollection from '../../components/ImageCollection';
import kenzieImages from './imageNames/kenzieImages.json';
import dianeImages from './imageNames/dianeImages.json';

const kenzieInfo = {
  authorFolder: 'kenzieImages',
  title: 'McKenzie Verhulst (2022)',
  text: 'McKenzie Verhulst is a photographer based in Woodbury, MN.',
  href: (
    <a href="https://www.instagram.com/kenzie_captures/">
      McKenzie's Instagram
    </a>
  ),
  images: kenzieImages,
  displayName: 'BackViolin.jpg',
  buttonLink: 'mckenzie-verhulst-2022',
  galleryDisplay: true
};

const dianeInfo = {
  authorFolder: 'auntieDi',
  title: 'Diane Hallen (2019)',
  text: 'Diane Hallen is a fantastic photographer and school teacher in Hudson, WI.',
  href: null,
  images: dianeImages,
  displayName: 'Mike4.jpg',
  buttonLink: 'diane-hallen-2019',
  galleryDisplay: true
};

const collections = [kenzieInfo, dianeInfo];

export default function See() {
  const { collectionName } = useParams();

  const [currentGallery, setCurrentGallery] = useState({
    galleryDisplay: false
  });

  console.log(collections[0].images[0]);

  useEffect(() => {
    switch (collectionName) {
      case 'mckenzie-verhulst-2022':
        setCurrentGallery(kenzieInfo);
        break;
      case 'diane-hallen-2019':
        setCurrentGallery(dianeInfo);
        break;
      default:
        setCurrentGallery({ galleryDisplay: false });
        break;
    }
  }, [collectionName]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1 className="fade page-title">See Media</h1>
      <Divider></Divider>

      {currentGallery.galleryDisplay ? (
        <section className="fade-in">
          <ImageCarousel
            title={currentGallery.title}
            text={currentGallery.text}
            href={currentGallery.href}
            authorFolder={currentGallery.authorFolder}
            images={currentGallery.images}
          ></ImageCarousel>
        </section>
      ) : (
        <section className="fade-in">
          <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Collections</h2>
          <div
            style={{
              minHeight: '50vh',
              border: '2px solid var(--title-color)',
              margin: '5px 10vw',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {collections.map((collection, index) => {
              return (
                <ImageCollection
                  key={index}
                  title={collection.title}
                  authorFolder={collection.authorFolder}
                  displayImage={collection.images[0].name}
                  buttonLink={collection.buttonLink}
                ></ImageCollection>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
