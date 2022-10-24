import React, { useContext } from 'react';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import { Input, InputValueType } from '../../shared/Input/Input';
import { DateContext } from '../Filters/Filters';

export const DateFilter = () => {
  const {
    dateFromValue,
    dateToValue,
    setDateFromValue,
    setDateToValue,
    deleteDateFromValue,
    deleteDateToValue,
  } = useContext(DateContext);
  return (
    <FilterWrapper>
      <Input
        label="Дата оформления"
        prefix="c"
        valueType={InputValueType.date}
        value={dateFromValue}
        onChange={setDateFromValue}
        onDelete={deleteDateFromValue}
      />
      <Input
        prefix="по"
        valueType={InputValueType.date}
        value={dateToValue}
        onChange={setDateToValue}
        onDelete={deleteDateToValue}
      />
    </FilterWrapper>
  );
};
