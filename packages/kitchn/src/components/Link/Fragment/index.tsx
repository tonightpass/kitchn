import React from "react";
import styled from "styled-components";

import Link, { LinkProps } from "..";
import { withDecorator } from "../../../hoc/with-decorator";
import { KitchnComponent } from "../../../types";

type Props = {
  /**
   * The link's id.
   */
  id: string;
};

export type FragmentLinkProps = KitchnComponent<Props, LinkProps>;

const FragmentLinkComponent = styled(({ id, ...props }: FragmentLinkProps) => {
  const href = `#${id}`;
  return <Link id={id} href={href} {...props} />;
})``;

FragmentLinkComponent.displayName = "KitchnFragmentLink";
export const FragmentLink = withDecorator(FragmentLinkComponent);
export default FragmentLink;
