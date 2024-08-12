import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { KitchnComponent } from "../../types";

type Props = {
  value: number;
  max?: number;
  colors?: Record<number, string>;
  states?: Record<number, string | React.ReactNode>;
  title?: boolean;
  checkpointTitle?: boolean;
  checkpointStyle?: "round" | "bar";
};

export type ProgressProps = KitchnComponent<
  Props,
  React.ProgressHTMLAttributes<HTMLProgressElement>
>;

const ProgressComponent = styled(
  ({
    value,
    max = 100,
    colors,
    states,
    title = true,
    checkpointTitle = true,
    checkpointStyle = "round",
    ...props
  }: ProgressProps) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = React.useState<number>(0);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    React.useEffect(() => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.clientWidth);
      window.addEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.clientWidth);
    };

    const background = colors
      ? Object.keys(colors)
          .map((key) => parseInt(key, 10))
          .filter((key) => key <= value)
          .map((key) => colors[key])
          .pop()
      : undefined;

    const state = states
      ? Object.keys(states)
          .map((key) => parseInt(key, 10))
          .filter((key) => key <= value)
          .map((key) => states[key])
          .pop()
      : undefined;

    const { isMobile } = useBreakpoint();

    return (
      <ProgressContainer
        role={"progressbar"}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        states={states}
        ref={containerRef}
      >
        {states && title && (
          <ProgressState visible={!!state}>
            {state || "unknow state"}
          </ProgressState>
        )}
        <Component
          value={value}
          max={max}
          {...props}
          background={background}
          checkpointStyle={checkpointStyle}
        />
        <ProgressCheckpointContainer>
          {states &&
            Object.keys(states).map((key, index) => {
              const checkpoint = parseInt(key, 10);
              const active = checkpoint <= value;
              const first = checkpoint === 0;
              const last = checkpoint === max;
              return (
                <React.Fragment key={index}>
                  <ProgressCheckpoint
                    aria-hidden={"true"}
                    key={checkpoint}
                    value={checkpoint}
                    color={active ? background : undefined}
                    first={first}
                    last={last}
                    onMouseEnter={() => setIsHover(checkpoint)}
                    onMouseLeave={() => setIsHover(null)}
                    hasTitle={states && title}
                    max={max}
                    amount={Object.keys(states).length}
                    checkpointStyle={checkpointStyle}
                  />
                  {!isMobile && checkpointTitle && (
                    <ProgressCheckpointTitle
                      aria-hidden={"true"}
                      first={first}
                      last={last}
                      active={
                        (active && containerWidth > 0) || isHover === checkpoint
                      }
                    >
                      {states[checkpoint]}
                    </ProgressCheckpointTitle>
                  )}
                </React.Fragment>
              );
            })}
        </ProgressCheckpointContainer>
      </ProgressContainer>
    );
  },
)<
  ProgressProps & {
    background?: string;
  }
>`
  appearance: none;
  border: none;
  height: 10px;
  display: block;
  vertical-align: unset;
  width: 100%;

  &::-webkit-progress-bar {
    border-radius: 5px;
    background-color: ${({ theme, checkpointStyle }) =>
      checkpointStyle === "bar" ? "transparent" : theme.colors.layout.dark};
  }

  &::-webkit-progress-value {
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
  }
`;

const Component = styled.progress<{
  background?: string;
  checkpointStyle: ProgressProps["checkpointStyle"];
}>`
  &::-webkit-progress-value {
    background: ${({ theme, background, checkpointStyle }) =>
      checkpointStyle === "bar"
        ? "transparent"
        : background || theme.colors.layout.lightest};
  }
`;

export const ProgressContainer = styled.div<{
  states?: ProgressProps["states"];
}>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ states, theme }) => states && `margin-bottom: ${theme.gap.normal};`}
`;

export const ProgressState = styled.span<{
  visible: boolean;
}>`
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.size.small};
  font-style: italic;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.text.light};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const ProgressCheckpointContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.small};
`;

export const ProgressCheckpointTitle = styled.span<{
  active: boolean;
  first?: boolean;
  last?: boolean;
}>`
  margin-top: ${({ theme }) => theme.gap.normal};
  opacity: 0;
  font-size: ${({ theme }) => theme.size.small};
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.light};
  transition: all 0.3s ease-in-out;
  flex: 1;
  ${({ active }) => active && "opacity: 0.9;"};
  text-align: ${({ first, last }) =>
    first ? "left" : last ? "right" : "center"};
`;

export const ProgressCheckpoint = styled.div<{
  value: number;
  max: number;
  color?: string;
  first?: boolean;
  last?: boolean;
  hasTitle?: boolean;
  amount: number;
  checkpointStyle: ProgressProps["checkpointStyle"];
}>`
  position: absolute;
  top: ${({ hasTitle, checkpointStyle }) =>
    hasTitle
      ? `${checkpointStyle === "bar" ? 28 : 24}px`
      : `${checkpointStyle === "bar" ? 0 : -4}px`};
  left: ${({ value, max }) => `${(value * 100) / max}%`};
  width: ${({ checkpointStyle, amount }) =>
    checkpointStyle === "bar" ? `calc(${100 / amount}% - 2px)` : "18px"};
  height: ${({ checkpointStyle }) =>
    checkpointStyle === "bar" ? "10px" : "18px"};
  border-radius: ${({ theme }) => theme.radius.round};
  ${({ checkpointStyle, first, last }) => `
    ${!first && checkpointStyle === "bar" ? "border-top-left-radius: 0; border-bottom-left-radius: 0;" : ""}
    ${!last && checkpointStyle === "bar" ? "border-top-right-radius: 0; border-bottom-right-radius: 0;" : ""}
  `};
  background: ${({ theme, color, checkpointStyle }) =>
    checkpointStyle === "bar"
      ? color || theme.colors.layout.dark
      : color || theme.colors.layout.light};
  z-index: 1;
  transform: ${({ value, max, first, last }) =>
    first
      ? "translateX(0)"
      : last
        ? "translateX(-100%)"
        : `translateX(-${(value * 100) / max}%)`};

  &:hover {
    ${ProgressCheckpointTitle} {
      opacity: 1;
    }
  }
`;

ProgressComponent.displayName = "KitchnProgress";
export const Progress = withDecorator(ProgressComponent);
export default Progress;
