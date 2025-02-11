import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/with-decorator";
import { KitchnComponent } from "../../types";
import { Gap } from "../../types/theme";
import { isNumber } from "../../utils/is-number";

type Props = {
  x?: number | string | keyof Gap;
  y?: number | string | keyof Gap;
};

export type SpacerProps = KitchnComponent<Props>;

const SpacerComponent = styled(({ ...props }: SpacerProps) => {
  return <span role={"presentation"} {...props} />;
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
          : "1px"} -
      1px
  );
  margin-top: calc(
    ${(props) =>
        props.y
          ? props.theme.gap[props.y as keyof Gap] ||
            (isNumber(props.y)
              ? `${props.theme.gap.normal} * ${props.y}`
              : props.y)
          : "1px"} -
      1px
  );
`;

SpacerComponent.displayName = "KitchnSpacer";
export const Spacer = withDecorator(SpacerComponent);
export default Spacer;
