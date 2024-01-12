import React from "react";
import styled from "styled-components";

import Link, { LinkProps } from "..";
import withScale from "../../../hoc/withScale";
import { KitchenComponent } from "../../../types";

type Props = LinkProps & {
  /**
   * The link's id.
   */
  id: string;
};

export type FragmentLinkProps = KitchenComponent<
  Props,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

const FragmentLinkComponent = styled(({ id, ...props }: FragmentLinkProps) => {
  const href = `#${id}`;
  return <Link id={id} href={href} {...props} />;
})``;

FragmentLinkComponent.displayName = "KitchenFragmentLink";
export const FragmentLink = withScale(FragmentLinkComponent);
export default FragmentLink;
