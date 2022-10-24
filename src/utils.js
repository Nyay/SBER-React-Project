export const noop = () => {};

export const createSetterHandler =
  (setter) =>
  ({ target: { value } }) => {
    setter(value);
  };
