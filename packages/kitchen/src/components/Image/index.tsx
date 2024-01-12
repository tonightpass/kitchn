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

const ImageComponent = styled(({ src, alt, ...props }: ImageProps) => {
  return <img src={src} alt={alt} draggable={false} {...props} />;
})<ImageProps>``;

ImageComponent.displayName = "KitchenImage";
export const Image = withBox(ImageComponent);
export default Image;
