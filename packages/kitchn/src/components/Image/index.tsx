import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";

type Props = {
  htmlWidth?: string;
  htmlHeight?: string;
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

const ImageComponent = styled(
  ({ src, alt, htmlWidth, htmlHeight, ...props }: ImageProps) => {
    return (
      <img
        src={src}
        alt={alt}
        width={htmlWidth}
        height={htmlHeight}
        draggable={false}
        {...props}
      />
    );
  },
)<ImageProps>`
  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;

ImageComponent.displayName = "KitchnImage";
export const Image = withDecorator(ImageComponent);
export default Image;
