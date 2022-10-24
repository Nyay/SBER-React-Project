import React, { createContext, useCallback, useState } from 'react';
import { Search } from '../Search/Search';
import PropTypes from 'prop-types';

export const SearchContext = createContext(undefined);

export const SearchComponent = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        placeholder: placeholder,
        onChange: onChangeHandler,
        value: value,
      }}
    >
      <Search />
    </SearchContext.Provider>
  );
};

SearchComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

SearchComponent.defaultProps = {
  placeholder: 'Введите значение',
};
