import React, { useContext } from 'react';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import { Input, InputValueType } from '../../shared/Input/Input';
import { PriceContext } from '../Filters/Filters';

export const PriceFilter = () => {
  const {
    priceFromValue,
    priceToValue,
    setPriceFromValue,
    setPriceToValue,
    deletePriceFromValue,
    deletePriceToValue,
  } = useContext(PriceContext);
  return (
    <FilterWrapper>
      <Input
        label="Сумма заказа"
        prefix="от"
        valueType={InputValueType.price}
        value={priceFromValue}
        onChange={setPriceFromValue}
        onDelete={deletePriceFromValue}
      />
      <Input
        prefix="до"
        valueType={InputValueType.price}
        value={priceToValue}
        onChange={setPriceToValue}
        onDelete={deletePriceToValue}
      />
    </FilterWrapper>
  );
};
