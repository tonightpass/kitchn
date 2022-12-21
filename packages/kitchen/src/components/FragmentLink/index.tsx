import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Link, { LinkProps } from "../Link";

export type FragmentLinkProps = KitchenComponent &
  LinkProps & {
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
