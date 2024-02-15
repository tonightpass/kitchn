/**
 * isNumber is a utility function that checks if a value is a number.
 */
export const isNumber = (value: any): boolean => {
  return !isNaN(Number(value));
};
