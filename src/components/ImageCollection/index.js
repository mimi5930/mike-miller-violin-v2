import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './image-collection.css';

export default function ImageCollection({
  title,
  authorFolder,
  displayImage,
  buttonLink
}) {
  return (
    <div
      className="collection-item"
      style={{
        backgroundImage: `url(${require(`../../pages/See/carouselImages/${authorFolder}/${displayImage}`)})`
      }}
    >
      <Link className="collection-link" to={`/see/${buttonLink}`}>
        <Button type="primary">{title}</Button>
      </Link>
    </div>
  );
}
