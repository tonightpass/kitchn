const parseCookieString = (cookieString: string) => {
  const cookieArray = cookieString.split(";");
  const cookieObject = cookieArray.reduce((acc, cookie) => {
    const [key, encodedValue] = cookie.split("=");
    const value = decodeURIComponent(encodedValue);
    const parsedValue = value !== "undefined" ? JSON.parse(value) : undefined;
    return { ...acc, [key.trim()]: parsedValue };
  }, {});
  return cookieObject;
};

export default parseCookieString;
