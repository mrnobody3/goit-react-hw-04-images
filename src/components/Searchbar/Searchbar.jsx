import { Component } from 'react';
// import PropTypes from 'prop-types';

import s from './searchbar.module.css';

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
