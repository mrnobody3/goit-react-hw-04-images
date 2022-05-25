import PropTypes from 'prop-types';

import s from './button.module.css';

const Button = ({ text, onLoadMore }) => {
  return (
    <button className={s.button} type="button" onClick={onLoadMore}>
      {text}
    </button>
  );
};
export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
