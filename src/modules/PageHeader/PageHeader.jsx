import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Sun } from '../../static/sun.svg';
import { HeaderTitle } from '../../shared/HeaderTitle/HeaderTitle';
import { Button, ButtonSizes, ButtonTypes } from '../../shared/Button/Button';
import styles from './PageHeader.module.css';

export const PageHeader = ({ pageTitle = '' }) => {
  return (
    <div className={styles._}>
      <HeaderTitle title={pageTitle} />
      <Button
        text={'Светлая тема'}
        size={ButtonSizes.lg}
        type={ButtonTypes.transparent}
        icon={Sun}
      />
    </div>
  );
};

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
