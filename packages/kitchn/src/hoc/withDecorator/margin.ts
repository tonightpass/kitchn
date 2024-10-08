import { CSSProperties } from "react";
import { css } from "styled-components";

import { handleValue } from "./decorator";
import { Gap } from "../../types/theme";

export type MarginProps = {
  margin?: CSSProperties["margin"] | keyof Gap;
  m?: MarginProps["margin"];
  marginLeft?: CSSProperties["marginLeft"] | keyof Gap;
  marginRight?: CSSProperties["marginRight"] | keyof Gap;
  marginTop?: CSSProperties["marginTop"] | keyof Gap;
  marginBottom?: CSSProperties["marginBottom"] | keyof Gap;
  ml?: MarginProps["marginLeft"];
  mr?: MarginProps["marginRight"];
  mt?: MarginProps["marginTop"];
  mb?: MarginProps["marginBottom"];
  mx?: MarginProps["margin"];
  my?: MarginProps["margin"];
};

export const marginCss = css<MarginProps>`
  ${({ theme, margin, m }) =>
    margin !== undefined || m !== undefined
      ? `margin: ${handleValue(theme, margin || m)};`
      : ""}
  ${({ theme, marginLeft, ml, mx }) =>
    marginLeft !== undefined || ml !== undefined || mx !== undefined
      ? `margin-left: ${handleValue(theme, marginLeft || ml || mx)};`
      : ""}
  ${({ theme, marginRight, mr, mx }) =>
    marginRight !== undefined || mr !== undefined || mx !== undefined
      ? `margin-right: ${handleValue(theme, marginRight || mr || mx)};`
      : ""}
  ${({ theme, marginTop, mt, my }) =>
    marginTop !== undefined || mt !== undefined || my !== undefined
      ? `margin-top: ${handleValue(theme, marginTop || mt || my)};`
      : ""}
  ${({ theme, marginBottom, mb, my }) =>
    marginBottom !== undefined || mb !== undefined || my !== undefined
      ? `margin-bottom: ${handleValue(theme, marginBottom || mb || my)};`
      : ""}
`;
