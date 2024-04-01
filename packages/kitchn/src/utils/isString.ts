/**
 * isString is a utility function that checks if a value is a string.
 */
export const isString = (x: any) => {
  return Object.prototype.toString.call(x) === "[object String]";
};
