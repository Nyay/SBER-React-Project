import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ReactComponent as ArrowIcon } from '../../static/v_arrow.svg';
import { ReactComponent as XIcon } from '../../static/x-medium.svg';

export const InputTypes = {
  primary: 'primary',
  incorrect: 'incorrect',
  blocked: 'blocked',
};

export const InputValueType = {
  date: 'date',
  price: 'price',
  list: 'list',
};

const PLACEHOLDERS = {
  [InputValueType.date]: 'dd.mm.yyyy',
  [InputValueType.price]: '₽',
  [InputValueType.list]: 'Любой',
};

export const Input = ({
  type,
  valueType,
  label,
  prefix,
  value,
  onChange,
  onDelete,
}) => {
  const blockClass = classnames(styles._, {
    [styles.primary]: type === InputTypes.primary,
    [styles.incorrect]: type === InputTypes.incorrect,
    [styles.blocked]: type === InputTypes.blocked,
  });
  const bodyClass = classnames(styles.body, {
    [styles.date]: valueType === InputValueType.date,
    [styles.price]: valueType === InputValueType.price,
    [styles.list]: valueType === InputValueType.list,
  });
  return (
    <div className={blockClass}>
      {label && (
        <label className={styles.label} htmlFor="">
          {label}
        </label>
      )}
      <div className={bodyClass}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          className={styles.input}
          type="text"
          placeholder={PLACEHOLDERS[valueType]}
          value={value}
          onChange={onChange}
        />
        {valueType === 'list' && <ArrowIcon className={styles.icon} />}
        {value && <XIcon className={styles.icon} onClick={onDelete} />}
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  valueType: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

Input.defaultProps = {
  type: InputTypes.primary,
};
