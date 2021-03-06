import { useEffect, useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import { searchImg } from '../shared/services/imagesApi';

import s from './app.module.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState({
    isModal: false,
    modalData: {},
  });

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImg = async () => {
      setImages({
        ...images,
        loading: true,
        error: null,
      });
      try {
        const data = await searchImg(search, page);
        const dataArr = data.hits;
        setImages(prevState => ({
          ...prevState,
          items: [...prevState.items, ...dataArr],
          loading: false,
        }));
      } catch (error) {
        setImages({
          ...images,
          loading: false,
          error: error.message,
        });
      }
    };
    fetchImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const getSearch = search => {
    setSearch(search);
    setPage(1);
    setImages({ ...images, items: [] });
  };
  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = modalData => {
    setModal({ isModal: true, modalData });
  };

  const closeModal = () => {
    setModal({ isModal: false, modalData: {} });
  };

  const { loading, items } = images;
  const { tags, largeImageURL } = modal.modalData;
  const { isModal } = modal;
  return (
    <div className={s.App}>
      <Searchbar onSubmit={getSearch} />
      {Boolean(items.length) && <ImageGallery items={items} open={openModal} />}
      {items.length === 0 && search && (
        <p>I am sorry. We didn't find {search}</p>
      )}
      {loading && (
        <div>
          <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={100}
            color="rgba(63, 81, 181, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      )}
      {items.length > 0 && <Button text="Load more" onLoadMore={onLoadMore} />}
      {isModal && (
        <Modal close={closeModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </div>
  );
};

export default App;
