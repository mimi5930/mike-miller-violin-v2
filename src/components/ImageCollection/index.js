import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './image-collection.css';

export default function ImageCollection({ authorFolder, displayImage }) {
  return (
    <>
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
        <div
          className="collection-item"
          style={{
            backgroundImage: `url(${require(`../../pages/See/carouselImages/${authorFolder}/${displayImage}`)})`
          }}
        >
          <Link className="collection-link" to="/see/mckenzie-verhulst-2022">
            <Button type="primary">McKenzie Verhulst {'(2022)'}</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
