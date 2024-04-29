import React from "react";
import styled from "styled-components";

import { convertRGBToRGBA, withDecorator } from "../..";
import { AccentColors, KitchnComponent } from "../../types";
import { Container, ContainerProps } from "../Container";
import { Tab, Tabs } from "../Tabs";
import { Text, TextProps } from "../Text";

type Props = {
  tabs?: boolean;
  disabled?: boolean;
  highlight?: boolean;
  type?: keyof AccentColors;
  children?: React.ReactNode;
};

export type FieldsetProps = KitchnComponent<Props>;

const FieldsetFooterActions = styled(
  ({ children, ...props }: ContainerProps) => {
    return (
      <Container ml={"auto"} gap={"normal"} row {...props}>
        {children}
      </Container>
    );
  },
)``;

const FieldsetFooterStatus = styled(({ children, ...props }: TextProps) => {
  return (
    <Text color={"lighter"} {...props}>
      {children}
    </Text>
  );
})`
  font-size: ${({ theme }) => theme.size.small};
  align-self: center;
`;

const FieldsetFooter = styled.footer<{
  disabled?: boolean;
  highlight?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  background: ${({ theme, disabled, highlight }) =>
    disabled
      ? theme.colors.layout.darkest
      : highlight
        ? theme.colors.layout.darkest
        : theme.colors.layout.darker};
`;

const FieldsetComponent = styled(({ children, ...props }: FieldsetProps) => {
  return (
    <div role={"group"} {...props}>
      {children}
    </div>
  );
})<FieldsetProps>`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-color: ${({ theme, type }) => type && theme.colors.accent[type]};
  border-radius: ${({ theme }) => theme.radius.square};
  ${({ tabs }) =>
    tabs &&
    `
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `}
  background: ${({ theme }) => theme.colors.layout.darkest};
  cursor: ${({ disabled }) => disabled && "not-allowed"};

  ${FieldsetFooter} {
    border-color: ${({ theme, type }) => type && theme.colors.accent[type]};
    background-color: ${({ theme, type }) =>
      type && convertRGBToRGBA(theme.colors.accent[type], 0.2)};

    ${FieldsetFooterStatus} {
      color: ${({ theme, type }) => type && theme.colors.accent[type]};
    }
  }
`;

const FieldsetContent = styled(Container)<{ disabled?: boolean }>`
  padding: 24px;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  background: ${({ theme, disabled }) =>
    disabled && theme.colors.layout.darker};
`;

const FieldsetTitle = styled(({ children, ...props }: TextProps) => {
  return (
    <Text h4 {...props}>
      {children}
    </Text>
  );
})<{ disabled?: boolean }>`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const FieldsetSubtitle = styled(Text)`
  font-size: ${({ theme }) => theme.size.small};
  margin: 12px 0;
`;

export const isFieldsetContainer = (
  child: React.ReactNode,
): child is React.ReactElement<any> => {
  return React.isValidElement(child) && child.type === Fieldset.Container;
};

export type FieldsetTabsProps = KitchnComponent<
  {
    tabs: string[];
  },
  ContainerProps
>;

const FieldsetTabs = styled(
  ({ children, tabs, ...props }: FieldsetTabsProps) => {
    const [selected, setSelected] = React.useState(String(0)); // Initialize with index of the first tab
    const childrenArray = React.Children.toArray(children);

    return (
      <Container {...props}>
        <Tabs
          tabs={tabs.map((tab, i) => {
            return { title: tab, value: String(i) };
          })}
          selected={selected}
          setSelected={setSelected}
        />
        {childrenArray.map((child, i) => {
          if (isFieldsetContainer(child) && selected === String(i)) {
            return React.cloneElement(child, { tabs: true });
          } else {
            return null;
          }
        })}
      </Container>
    );
  },
)`
  ${Tabs} {
    padding: 8px 16px 0;
    background: ${({ theme }) => theme.colors.layout.darkest};
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.layout.dark};
    border-bottom: none;
    border-top-left-radius: ${({ theme }) => theme.radius.square};
    border-top-right-radius: ${({ theme }) => theme.radius.square};

    ${Tab} {
      font-size: ${({ theme }) => theme.size.compact};
    }
  }
`;

export const Fieldset = {
  Container: withDecorator(FieldsetComponent),
  Content: withDecorator(FieldsetContent),
  Title: withDecorator(FieldsetTitle),
  Subtitle: withDecorator(FieldsetSubtitle),
  Footer: withDecorator(FieldsetFooter),
  FooterStatus: withDecorator(FieldsetFooterStatus),
  FooterActions: withDecorator(FieldsetFooterActions),
  Tabs: withDecorator(FieldsetTabs),
};
