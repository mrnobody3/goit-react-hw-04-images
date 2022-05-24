import s from './imageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
