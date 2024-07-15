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
};

export type ImageProps = KitchnComponent<
  Props,
  React.ImgHTMLAttributes<HTMLImageElement>
>;

const ImageComponent = styled(
  ({ src, alt, width, w, height, h, ...props }: ImageProps) => {
    const widthValue = width || w || height || h;
    const heightValue = height || h || width || w;

    return (
      <img
        src={src}
        alt={alt}
        draggable={false}
        width={widthValue}
        height={heightValue}
        {...props}
      />
    );
  },
)<ImageProps>``;

ImageComponent.displayName = "KitchnImage";
export const Image = withDecorator(ImageComponent);
export default Image;
