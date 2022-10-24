import React from 'react';
import styles from './DropdownItem.module.css';
import { Checkbox } from '../Checkbox/Checkbox';
import PropTypes from 'prop-types';

export const DropdownItem = ({ id, label = '', ...props }) => {
  return (
    <label className={styles._} htmlFor={id} {...props}>
      <Checkbox id={id} label={label} />
    </label>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};
