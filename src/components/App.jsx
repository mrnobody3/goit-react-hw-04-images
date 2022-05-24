import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import s from './app.module.css';

class App extends Component {
  state = {
    items: [],
    loading: false,

    async componentDidMount() {
      try {
        // const {data} = await
      } catch (error) {}
    },
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}

export default App;
