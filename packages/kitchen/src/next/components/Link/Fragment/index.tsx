import React from "react";
import styled from "styled-components";

import Link, { LinkProps } from "..";

export type FragmentLinkProps = LinkProps & {
  /**
   * The link's id.
   */
  id: string;
};

const FragmentLink = styled(({ id, ...props }: FragmentLinkProps) => {
  const href = `#${id}`;
  return <Link id={id} href={href} {...props} />;
})``;

export default FragmentLink;
