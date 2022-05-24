import s from './imageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={s.item}>
      <img className={s.img} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
