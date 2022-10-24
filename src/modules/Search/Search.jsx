import React, { useContext } from 'react';
import styles from './Search.module.css';
import { Button, ButtonSizes, ButtonTypes } from '../../shared/Button/Button';
import { ReactComponent as RefreshIcon } from '../../static/refresh.svg';
import { ReactComponent as FilterIcon } from '../../static/filter.svg';
import { ReactComponent as SearchIcon } from '../../static/search.svg';
import { Searchbar } from '../../shared/Searchbar/Searchbar';
import { SearchContext } from '../SearchComponent/SearchComponent';
import { MainPageContext } from '../../pages/MainPage/MainPage';

export const Search = () => {
  const { placeholder, onChange, value } = useContext(SearchContext);
  const { setShowFilter } = useContext(MainPageContext);
  return (
    <div className={styles._}>
      <div className={styles.searchbar}>
        <Searchbar
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <Button text="Фильтры" icon={FilterIcon} onClick={setShowFilter} />
        <Button
          text="Сбросить фильтры"
          type={ButtonTypes.transparent}
          icon={SearchIcon}
        />
      </div>
      <Button
        text="Загрузка"
        type={ButtonTypes.transparent}
        size={ButtonSizes.lg}
        icon={RefreshIcon}
      />
    </div>
  );
};
