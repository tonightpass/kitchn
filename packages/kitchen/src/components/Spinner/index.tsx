import React from "react";
import styled from "styled-components";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import { skBouncedelay } from "../../utils/animate";

type Props = {
  color?: string;
  size?: number;
};

export type SpinnerProps = KitchenComponent<Props>;

const SpinnerComponent = styled(({ ...props }: SpinnerProps) => {
  return (
    <div {...props}>
      <div className={"bounce1"} />
      <div className={"bounce2"} />
      <div className={"bounce3"} />
    </div>
  );
})`
  display: flex;
  align-items: center;
  width: ${({ size }) => size || 50}px;
  height: ${({ size }) => size || 50}px;
  text-align: center;

  div {
    width: 25%;
    height: 25%;
    background-color: ${({ color, theme }) =>
      color || theme.colors.accent.light};

    border-radius: 100%;
    display: inline-block;
    animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }
`;

SpinnerComponent.displayName = "KitchenSpinner";
export const Spinner = withScale(SpinnerComponent);
export default Spinner;
