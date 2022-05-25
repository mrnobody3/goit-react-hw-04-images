import { Component } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import { searchImg } from '../shared/services/imagesApi';

import s from './app.module.css';

class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    isModal: false,
    modalData: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.setState({
        loading: true,
        error: null,
      });
      try {
        const data = await searchImg(search, page);
        const dataArr = data.hits;
        this.setState(({ items }) => {
          return {
            items: [...items, ...dataArr],
            loading: false,
          };
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }
  }
  getSearch = search => {
    this.setState({
      search,
      page: 1,
      items: [],
    });
  };
  onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = modalData => {
    this.setState({
      isModal: true,
      modalData,
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
    });
  };

  render() {
    const { loading, items, isModal, modalData, search } = this.state;
    const { tags, largeImageURL } = modalData;
    const { getSearch, onLoadMore, openModal, closeModal } = this;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={getSearch} />
        {Boolean(items.length) && (
          <ImageGallery items={items} open={openModal} />
        )}
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
        {items.length > 0 && (
          <Button text="Load more" onLoadMore={onLoadMore} />
        )}
        {isModal && (
          <Modal close={closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
