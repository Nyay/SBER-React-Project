import React from 'react';
import styles from './FilterWrapper.module.css';
import PropTypes from 'prop-types';

export const FilterWrapper = ({ children }) => {
  return <div className={styles._}>{children}</div>;
};

FilterWrapper.propTypes = {
  children: PropTypes.elementType,
};
