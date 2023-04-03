/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import withBox from "../../hoc/withBox";
import { KitchenComponent } from "../../types";

type Props = {
  src: string;
  alt: string;
};

export type ImageProps = KitchenComponent<
  Props,
  React.ImgHTMLAttributes<HTMLImageElement>
>;

const Image = styled(({ src, alt, ...props }: ImageProps) => {
  return <img src={src} alt={alt} draggable={false} {...props} />;
})<ImageProps>``;

export default withBox(Image);
