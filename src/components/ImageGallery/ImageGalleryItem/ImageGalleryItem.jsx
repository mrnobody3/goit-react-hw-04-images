import PropTypes from 'prop-types';

import s from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, webformatURL }) => {
  return <img className={s.img} src={webformatURL} alt={tags} />;
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
