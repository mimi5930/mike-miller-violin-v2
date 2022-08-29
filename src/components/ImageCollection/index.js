import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './image-collection.css';

export default function ImageCollection({
  buttonTitle,
  authorFolder,
  displayImage,
  buttonLinkTo
}) {
  return (
    <div
      className="collection-item"
      style={{
        backgroundImage: `url(${require(`../../pages/SeeCollection/carouselImages/${authorFolder}/${displayImage}`)})`
      }}
    >
      <Link className="collection-link" to={`/see/${buttonLinkTo}`}>
        <Button type="primary">{buttonTitle}</Button>
      </Link>
    </div>
  );
}
