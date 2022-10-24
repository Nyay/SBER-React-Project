import React, { createContext, useContext, useState } from 'react';
import styles from './Filters.module.css';
import PropTypes from 'prop-types';
import { DateFilter } from '../DateFilter/DateFilter';
import { PriceFilter } from '../PriceFilter/PriceFilter';
import { createSetterHandler } from '../../utils';
import { MainPageContext } from '../../pages/MainPage/MainPage';
import { StatusFilter } from '../StatusFilter/StatusFilter';

export const DateContext = createContext(undefined);
export const PriceContext = createContext(undefined);

export const Filters = () => {
  const [dateFromValue, setDateFromValue] = useState('');
  const [dateToValue, setDateToValue] = useState('');
  const [priceFromValue, setPriceFromValue] = useState('');
  const [priceToValue, setPriceToValue] = useState('');

  const { showFilter } = useContext(MainPageContext);

  const createDelete = (setter) => () => {
    setter('');
  };

  if (showFilter) {
    return (
      <div className={styles._}>
        <DateContext.Provider
          value={{
            dateFromValue: dateFromValue,
            setDateFromValue: createSetterHandler(setDateFromValue),
            deleteDateFromValue: createDelete(setDateFromValue),
            dateToValue: dateToValue,
            setDateToValue: createSetterHandler(setDateToValue),
            deleteDateToValue: createDelete(setDateToValue),
          }}
        >
          <DateFilter />
        </DateContext.Provider>
        <StatusFilter />
        <PriceContext.Provider
          value={{
            priceFromValue: priceFromValue,
            setPriceFromValue: createSetterHandler(setPriceFromValue),
            deletePriceFromValue: createDelete(setPriceFromValue),
            priceToValue: priceToValue,
            setPriceToValue: createSetterHandler(setPriceToValue),
            deletePriceToValue: createDelete(setPriceToValue),
          }}
        >
          <PriceFilter />
        </PriceContext.Provider>
      </div>
    );
  }
};

Filters.propTypes = {
  children: PropTypes.elementType,
};
