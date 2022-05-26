import PropTypes from 'prop-types';

import s from './imageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ items, open }) => {
  const elements = items.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li
      key={id}
      className={s.item}
      onClick={() => open({ tags, largeImageURL })}
    >
      <ImageGalleryItem tags={tags} webformatURL={webformatURL} />
    </li>
  ));
  return <ul className={s.gallery}>{elements}</ul>;
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
