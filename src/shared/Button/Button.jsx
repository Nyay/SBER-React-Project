import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import classnames from 'classnames';
import { noop } from '../../utils';

export const ButtonTypes = {
  primary: 'primary',
  transparent: 'transparent',
};

export const ButtonSizes = {
  sm: 'sm',
  lg: 'lg',
};

export const Button = ({ type, size, icon: Icon, text, onClick }) => {
  const blockClass = classnames(styles._, {
    [styles.primary]: type === ButtonTypes.primary,
    [styles.transparent]: type === ButtonTypes.transparent,
    [styles.lg]: size === ButtonSizes.lg,
    [styles.sm]: size === ButtonSizes.sm,
  });

  return (
    <button className={blockClass} onClick={onClick}>
      {Icon && <Icon className={styles.icon} />}
      {text && <div className={styles.text}>{text}</div>}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: ButtonTypes.primary,
  size: ButtonSizes.lg,
  onClick: noop(),
};
