import { capitalize } from "./capitalize";

export const shortenName = (name: string): string => {
  const parts = name.trim().split(" ");
  let shortened = "";
  for (const part of parts) {
    shortened += part[0].toUpperCase();
  }
  if (name.length <= 3) return capitalize(name);
  return shortened.slice(0, 3);
};
