import React from "react";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import useBreakpoint from "../../hooks/useBreakpoint";
import { KitchenComponent } from "../../types";

type Props = {
  value: number;
  max?: number;
  colors?: Record<number, string>;
  states?: Record<number, string | React.ReactNode>;
  title?: boolean;
  checkpointTitle?: boolean;
};

export type ProgressProps = KitchenComponent<
  Props,
  React.ProgressHTMLAttributes<HTMLProgressElement>
>;

const Progress = styled(
  ({
    value,
    max = 100,
    colors,
    states,
    title = true,
    checkpointTitle = true,
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
          .map((key) => parseInt(key))
          .filter((key) => key <= value)
          .map((key) => colors[key])
          .pop()
      : undefined;

    const state = states
      ? Object.keys(states)
          .map((key) => parseInt(key))
          .filter((key) => key <= value)
          .map((key) => states[key])
          .pop()
      : undefined;

    const { isMobile } = useBreakpoint();

    return (
      <Container states={states} ref={containerRef}>
        {states && title && (
          <State visible={!!state}>{state || "unknow state"}</State>
        )}
        <Component value={value} max={max} {...props} background={background} />
        <CheckpointContainer>
          {states &&
            Object.keys(states).map((key) => {
              const checkpoint = parseInt(key);
              const active = checkpoint <= value;
              const first = checkpoint === 0;
              const last = checkpoint === max;
              return (
                <>
                  <Checkpoint
                    key={checkpoint}
                    value={checkpoint}
                    color={active ? background : undefined}
                    first={first}
                    last={last}
                    onMouseEnter={() => setIsHover(checkpoint)}
                    onMouseLeave={() => setIsHover(null)}
                    title={states && title}
                  />
                  {!isMobile && checkpointTitle && (
                    <CheckpointTitle
                      first={first}
                      last={last}
                      active={
                        (active && containerWidth > 0) || isHover === checkpoint
                      }
                    >
                      {states[checkpoint]}
                    </CheckpointTitle>
                  )}
                </>
              );
            })}
        </CheckpointContainer>
      </Container>
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

  ::-webkit-progress-bar {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.layout.dark};
  }

  ::-webkit-progress-value {
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
  }
`;

const Component = styled.progress`
  ::-webkit-progress-value {
    background: ${({ theme, background }) =>
      background || theme.colors.layout.lightest};
  }
`;

const Container = styled.div<{
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

const State = styled.span<{
  visible: boolean;
}>`
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.size.small};
  font-style: italic;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.text.light};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const CheckpointContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.small};
`;

const CheckpointTitle = styled.span<{
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

const Checkpoint = styled.div<{
  value: number;
  color?: string;
  first?: boolean;
  last?: boolean;
  title?: boolean;
}>`
  position: absolute;
  top: ${({ title }) => (title ? "24px" : "-4px")};
  left: ${({ value }) => `${value}%`};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme, color }) => color || theme.colors.layout.light};
  z-index: 1;
  transform: ${({ first, last }) =>
    first ? "translateX(0)" : last ? "translateX(-100%)" : "translateX(-50%)"};

  :hover {
    ${CheckpointTitle} {
      opacity: 1;
    }
  }
`;

export default withScale(Progress);
