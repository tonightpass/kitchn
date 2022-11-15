import React from "react";
import { TextProps as NativeTextProps } from "react-native";
import styled from "styled-components/native";
import { ReactNative } from "../..";
import { Size } from "../../types/theme";

export type TextProps = NativeTextProps & {
  /**
   * The font size.
   */
  size?: keyof Size;
};

const Text = styled((props: TextProps) => (
  <ReactNative.Text {...props} />
))<TextProps>`
  font-size: ${(props) => props.theme.size[props.size || "normal"]};
  color: ${({ theme }) => theme.colors.accent.danger};
`;

export default Text;
