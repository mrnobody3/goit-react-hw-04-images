import PropTypes from 'prop-types';

import s from './imageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ items, open }) => {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem items={items} open={open} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  open: PropTypes.func.isRequired,
};
