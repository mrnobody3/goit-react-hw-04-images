import PropTypes from 'prop-types';

import s from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ items, open }) => {
  const elements = items.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li
      key={id}
      className={s.item}
      onClick={() => open({ tags, largeImageURL })}
    >
      <img className={s.img} src={webformatURL} alt={tags} />
    </li>
  ));

  return <>{elements}</>;
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};
ImageGalleryItem.propTypes = {
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
