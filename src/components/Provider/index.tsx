import { DefaultTheme, ThemeProvider } from "styled-components";

interface Props {
  theme: DefaultTheme | ((theme: DefaultTheme) => DefaultTheme);
  children?: React.ReactNode;
}

const KitchenProvider: React.FC<Props> = ({ children, theme }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default KitchenProvider;
