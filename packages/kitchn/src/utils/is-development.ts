export const isDevelopment = (): boolean => {
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "development";
  }
  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  );
};
