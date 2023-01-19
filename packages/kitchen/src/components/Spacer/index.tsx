import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import { Gap } from "../../types/theme";

export type SpacerProps = KitchenComponent & {
  x?: number | keyof Gap;
  y?: number | keyof Gap;
};

const Spacer = styled(({ ...props }: SpacerProps) => {
  return <span {...props}></span>;
})<SpacerProps>`
  display: block;
  width: 1px;
  height: 1px;
  min-width: 1px;
  min-height: 1px;
  // horizontal margin can be set with x and it can either be a number or a key from the theme
  margin-left: ${(props) =>
    props.x && `${props.theme.gap[props.x as keyof Gap] || `${props.x}px`}`};
  // vertical margin can be set with y and it can either be a number or a key from the theme
  margin-top: ${(props) =>
    props.y && `${props.theme.gap[props.y as keyof Gap] || `${props.y}px`}`};
`;

export default Spacer;
