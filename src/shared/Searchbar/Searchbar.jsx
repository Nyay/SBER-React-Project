import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { ReactComponent as Search } from '../../static/search.svg';
import { ReactComponent as MediumX } from '../../static/x-medium.svg';

export const Searchbar = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles._}>
      <div className={styles.icon}>
        <Search />
      </div>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value && (
        <div className={styles.button}>
          <MediumX />
        </div>
      )}
    </div>
  );
};

Searchbar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
