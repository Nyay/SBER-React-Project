import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderTitle.module.css';

export const HeaderTitle = ({ title = '' }) => {
  return <div className={styles._}>{title}</div>;
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
