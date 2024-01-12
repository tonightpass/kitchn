import React from "react";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import { Gap } from "../../types/theme";
import isNumber from "../../utils/isNumber";

type Props = {
  x?: number | string | keyof Gap;
  y?: number | string | keyof Gap;
};

export type SpacerProps = KitchenComponent<Props>;

const SpacerComponent = styled(({ ...props }: SpacerProps) => {
  return <span {...props} />;
})<SpacerProps>`
  display: block;
  width: 1px;
  height: 1px;
  min-width: 1px;
  min-height: 1px;
  margin-left: calc(
    ${(props) =>
        props.x
          ? props.theme.gap[props.x as keyof Gap] ||
            (isNumber(props.x)
              ? `${props.theme.gap.normal} * ${props.x}`
              : props.x)
          : "1px"} - 1px
  );
  margin-top: calc(
    ${(props) =>
        props.y
          ? props.theme.gap[props.y as keyof Gap] ||
            (isNumber(props.y)
              ? `${props.theme.gap.normal} * ${props.y}`
              : props.y)
          : "1px"} - 1px
  );
`;

SpacerComponent.displayName = "KitchenSpacer";
export const Spacer = withScale(SpacerComponent);
export default Spacer;
