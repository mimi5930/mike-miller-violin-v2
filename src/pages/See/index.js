import React from 'react';
import { Divider } from 'antd';
import './see.css';
import ImageCollection from '../../components/ImageCollection';

const kenzieCollectionInfo = {
  buttonTitle: 'McKenzie Verhulst (2022)',
  authorFolder: 'kenzie2022',
  displayImage: 'BackViolin.jpg',
  buttonLinkTo: 'mckenzie-verhulst-2022'
};

const dianeCollectionInfo = {
  buttonTitle: 'Diane Hallen (2019)',
  authorFolder: 'diane2019',
  displayImage: 'Mike1.jpg',
  buttonLinkTo: 'diane-hallen-2019'
};

const collections = [kenzieCollectionInfo, dianeCollectionInfo];

export default function See() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1 className="fade page-title">See Collections</h1>
      <Divider></Divider>
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
                buttonTitle={collection.buttonTitle}
                authorFolder={collection.authorFolder}
                displayImage={collection.displayImage}
                buttonLinkTo={collection.buttonLinkTo}
              ></ImageCollection>
            );
          })}
        </div>
      </section>
      {/* )} */}
    </div>
  );
}
