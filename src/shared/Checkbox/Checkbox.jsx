import React from 'react';
import styles from './Checkbox.module.css';
import { ReactComponent as CheckmarkIcon } from '../../static/checkmark.svg';
import PropTypes from 'prop-types';

export const Checkbox = ({ id = '', label, children, ...props }) => {
  return (
    <div className={styles._} {...props}>
      <label className={styles.label}>
        <input id={id} className={styles.input} type="checkbox" />
        <CheckmarkIcon className={styles.icon} />
        {label && (
          <label className={styles.link} htmlFor={id}>
            {label}
          </label>
        )}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.elementType,
};
