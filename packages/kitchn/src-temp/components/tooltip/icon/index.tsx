import React from "react";
import styled from "styled-components";

import { TooltipTypes } from "..";
import { KitchnComponent } from "../../../types";
import {
  Placement,
  TooltipIconPosition,
  convertRGBToRGBA,
  getIconPosition,
} from "../../../utils";
import { TooltipIconOffset } from "../content";

interface Props {
  placement: Placement;
  iconOffset: TooltipIconOffset;
  type: TooltipTypes;
}

export type TooltipIconProps = KitchnComponent<Props>;

const TooltipIcon = styled(
  ({ placement, iconOffset, type, ...props }: TooltipIconProps) => {
    const { transform, top, left, right, bottom } = React.useMemo(
      () => getIconPosition(placement, iconOffset.x, iconOffset.y),
      [placement],
    );

    return (
      <TooltipIconContainer
        transform={transform}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        type={type}
        {...props}
      />
    );
  },
)`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 7px 6px 0;
  position: absolute;
  border-color: transparent
    ${({ theme, type }) => {
      switch (type) {
        case "danger":
          return convertRGBToRGBA(theme.colors.accent.danger, 0.5);
        case "warning":
          return convertRGBToRGBA(theme.colors.accent.warning, 0.5);
        case "info":
          return convertRGBToRGBA(theme.colors.accent.info, 0.5);
        case "success":
          return convertRGBToRGBA(theme.colors.accent.success, 0.5);
        case "secondary":
          return theme.colors.layout.lighter;
        case "primary":
        default:
          return theme.colors.layout.dark;
      }
    }}
    transparent transparent;
`;

const TooltipIconContainer = styled.span<TooltipIconPosition>`
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  transform: ${({ transform }) => transform};
`;

export default TooltipIcon;
