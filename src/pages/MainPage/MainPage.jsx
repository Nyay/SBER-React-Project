import React, { createContext, useState } from 'react';
import { PageHeader } from '../../modules/PageHeader/PageHeader';
import { SearchComponent } from '../../modules/SearchComponent/SearchComponent';
import { Filters } from '../../modules/Filters/Filters';
// import { createSetterHandler } from '../../utils';

export const MainPageContext = createContext(undefined);

export const MainPage = () => {
  const [showFilter, setShowFilter] = useState(true);

  const filterToggle = () => {
    setShowFilter(!showFilter);
  };

  return (
    <MainPageContext.Provider
      value={{
        showFilter: showFilter,
        setShowFilter: filterToggle,
      }}
    >
      <PageHeader pageTitle="Список заказов" />
      <SearchComponent placeholder="Номер заказа или ФИО" />
      <Filters />
    </MainPageContext.Provider>
  );
};
