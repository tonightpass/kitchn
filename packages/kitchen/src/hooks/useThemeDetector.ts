import React from "react";

const useThemeDetector = (): boolean => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  if (typeof window !== "undefined") {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      setIsDarkTheme(getCurrentTheme());
    }, [getCurrentTheme]);
  }

  React.useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const mqListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
