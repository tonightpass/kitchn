import React from "react";
import Cookies from "js-cookie";

export type UseCookieSerializer<T> = (object: T | undefined) => string;
export type UseCookieParser<T> = (val: string) => T | undefined;
export type UseCookieSetter<T> = React.Dispatch<
  React.SetStateAction<T | undefined>
>;

export type UseCookieOptions<T> = Cookies.CookieAttributes &
  Partial<{
    serializer: UseCookieSerializer<T>;
    parser: UseCookieParser<T>;
    logger: (error: any) => void;
  }>;

function useCookie<T>(
  key: string,
  defaultValue: T,
  options?: UseCookieOptions<T>
): [T, UseCookieSetter<T>];
function useCookie<T>(
  key: string,
  defaultValue?: T,
  options?: UseCookieOptions<T>
) {
  const opts = React.useMemo(() => {
    return {
      serializer: JSON.stringify,
      parser: JSON.parse,
      logger: console.log,
      ...options,
    };
  }, [options]);
  const { serializer, parser, logger } = opts;

  const [value, setValue] = React.useState(() => {
    if (typeof window === "undefined") return defaultValue;

    try {
      const item = Cookies.get(key);
      const res: T = item ? parser(item) : defaultValue;
      return res;
    } catch (e) {
      logger(e);
      return defaultValue;
    }
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const updateCookie = () => {
      if (value !== undefined) {
        Cookies.set(key, serializer(value), options);
      } else {
        Cookies.remove(key);
      }
    };

    try {
      updateCookie();
    } catch (e) {
      logger(e);
    }
  }, [key, logger, options, serializer, value]);

  return [value, setValue];
}

export default useCookie;
