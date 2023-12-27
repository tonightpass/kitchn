import { useTheme } from "next-themes";

const useThemeDetector = (): boolean => {
  const { systemTheme } = useTheme();
  const isDarkTheme = systemTheme === "dark";
  return isDarkTheme;
};

export default useThemeDetector;
