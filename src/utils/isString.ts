const isString = (x: any): boolean => {
  return Object.prototype.toString.call(x) === "[object String]";
};

export default isString;
