import React from 'react';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import { Input, InputValueType } from '../../shared/Input/Input';
import { Dropdown } from '../../shared/Dropdown/Dropdown';
import { DropdownItem } from '../../shared/DropdownItem/DropdownItem';

export const StatusFilter = () => {
  return (
    <FilterWrapper>
      <Input label="Статус заказа" valueType={InputValueType.list} />
      <Dropdown isInput>
        <DropdownItem id="1" label="Новый" />
        <DropdownItem id="2" label="Рассчет" />
        <DropdownItem id="3" label="Подтвержден" />
        <DropdownItem id="4" label="Отложен" />
        <DropdownItem id="5" label="Выполнен" />
        <DropdownItem id="6" label="Отменен" />
      </Dropdown>
    </FilterWrapper>
  );
};
