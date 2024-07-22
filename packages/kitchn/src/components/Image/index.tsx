import React from "react";
import styled from "styled-components";

import { AreaProps, withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";

type Props = {
  width?: AreaProps["width"];
  w?: Props["width"];
  height?: AreaProps["height"];
  h?: Props["height"];
  src: string;
  alt: string;
  objectFit?:
    | "cover"
    | "contain"
    | "fill"
    | "scale-down"
    | "inherit"
    | "initial"
    | "unset"
    | "none";
};

export type ImageProps = KitchnComponent<
  Props,
  React.ImgHTMLAttributes<HTMLImageElement>
>;

const ImageComponent = styled(({ src, alt, ...props }: ImageProps) => {
  return <img src={src} alt={alt} draggable={false} {...props} />;
})<ImageProps>`
  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;

ImageComponent.displayName = "KitchnImage";
export const Image = withDecorator(ImageComponent);
export default Image;
