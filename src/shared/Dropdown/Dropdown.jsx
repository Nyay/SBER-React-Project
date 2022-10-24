import React from 'react';
import styles from './Dropdown.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const DropdownTypes = {
  droppable: 'droppable',
};

export const Dropdown = ({ isInput, children }) => {
  const blockClass = classnames(styles._, {
    [styles.input]: isInput,
  });
  return <div className={blockClass}>{children}</div>;
};

Dropdown.propTypes = {
  isInput: PropTypes.bool,
  children: PropTypes.node,
};
