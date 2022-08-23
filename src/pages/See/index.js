import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import './see.css';
import ImageCarousel from '../../components/ImageCarousel';
import { useParams } from 'react-router-dom';
import ImageCollection from '../../components/ImageCollection';

const images = {
  kenzieImages: [
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
  ]
};

const kenzieInfo = {
  authorFolder: 'kenzieImages',
  title: 'McKenzie Verhulst (2022)',
  text: 'McKenzie Verhulst is a photographer based in Woodbury, MN.',
  href: (
    <a href="https://www.instagram.com/kenzie_captures/">
      McKenzie's Instagram
    </a>
  )
};

export default function See() {
  const { collectionName } = useParams();

  const [currentGallery, setCurrentGallery] = useState({
    galleryDisplay: false
  });

  useEffect(() => {
    if (collectionName === 'mckenzie-verhulst-2022') {
      setCurrentGallery({
        ...kenzieInfo,
        ...{ images: images.kenzieImages, galleryDisplay: true }
      });
    } else setCurrentGallery({ galleryDisplay: false });
  }, [collectionName]);

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
        Media
      </h1>
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
