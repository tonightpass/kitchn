import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";

type Props = {
  src: string;
  alt: string;
};

export type ImageProps = KitchnComponent<
  Props,
  React.ImgHTMLAttributes<HTMLImageElement>
>;

const ImageComponent = styled(({ src, alt, ...props }: ImageProps) => {
  return <img src={src} alt={alt} draggable={false} {...props} />;
})<ImageProps>``;

ImageComponent.displayName = "KitchnImage";
export const Image = withDecorator(ImageComponent);
export default Image;
