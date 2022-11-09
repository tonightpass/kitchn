import React from "react";
import styled from "styled-components";

interface Props {
  color?: string;
  size?: number;
}

const Spinner = styled(({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
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
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default Spinner;
