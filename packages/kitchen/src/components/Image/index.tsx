import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  margin?: number;
  caption?: string;
  captionSpacing?: number;
};

export type ImageProps = KitchenComponent<
  Props,
  React.ImgHTMLAttributes<HTMLImageElement>
>;

const Image = styled(
  ({
    src,
    alt,
    width,
    height,
    margin,
    caption,
    captionSpacing,
  }: ImageProps) => {
    return (
      <Container>
        <ImageContainer margin={margin}>
          <img src={src} alt={alt} width={width} height={height} />
          {caption && (
            <Caption captionSpacing={captionSpacing}>{caption}</Caption>
          )}
        </ImageContainer>
      </Container>
    );
  }
)<ImageProps>`
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Container = styled.div`
  box-sizing: border-box;
`;

const ImageContainer = styled.div<{
  margin: ImageProps["margin"];
}>`
  margin: ${(props) => `${props.margin}px 0`};
  width: fit-content;
`;

const Caption = styled.div<{
  captionSpacing: ImageProps["captionSpacing"];
}>`
  margin-top: ${(props) => `${props.captionSpacing}px`};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.size.small};
`;

export default Image;
