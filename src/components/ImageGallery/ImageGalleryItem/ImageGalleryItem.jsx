import PropTypes from 'prop-types';

import s from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, open }) => {
  return (
    <li className={s.item} onClick={() => open({ tags, largeImageURL })}>
      <img className={s.img} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
};
