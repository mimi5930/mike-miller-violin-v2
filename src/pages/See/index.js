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
  galleryDisplay: true
};

const dianeInfo = {
  authorFolder: 'auntieDi',
  title: 'Diane Hallen (2019)',
  text: 'Diane Hallen is a fantastic photographer and school teacher in Hudson, WI.',
  href: null,
  images: dianeImages,
  displayName: 'Mike4.jpg',
  galleryDisplay: true
};

const collections = [kenzieInfo, dianeInfo];

export default function See() {
  const { collectionName } = useParams();

  const [currentGallery, setCurrentGallery] = useState({
    galleryDisplay: false
  });

  useEffect(() => {
    if (collectionName === 'mckenzie-verhulst-2022') {
      setCurrentGallery(kenzieInfo);
    } else if (collectionName === 'diane-hallen-2019') {
      setCurrentGallery(dianeInfo);
    } else setCurrentGallery({ galleryDisplay: false });
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
        <ImageCarousel
          title={currentGallery.title}
          text={currentGallery.text}
          href={currentGallery.href}
          authorFolder={currentGallery.authorFolder}
          images={currentGallery.images}
        ></ImageCarousel>
      ) : (
        <ImageCollection
          authorFolder="kenzieImages"
          displayImage="BackViolin.jpg"
        ></ImageCollection>
      )}
    </div>
  );
}
