import { useTheme } from "next-themes";
import React from "react";

const useThemeDetector = (): boolean => {
  const { systemTheme } = useTheme();
  const isDarkTheme = systemTheme === "dark";
  return isDarkTheme;
};

export default useThemeDetector;
