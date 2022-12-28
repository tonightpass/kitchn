import React from "react";
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Icon from "../Icon";

export type TabsProps = KitchenComponent & {
  /**
   * The titles, values and icons of the tabs.
   */
  tabs: {
    title: string;
    value: string;
    icon?: IconType;
  }[];

  selected: string;

  setSelected: React.Dispatch<React.SetStateAction<string>>;

  active?: boolean;

  disabled?: boolean;
};

const Tabs = styled(
  ({ tabs, disabled, selected, setSelected, ...props }: TabsProps) => {
    return (
      <Container {...props}>
        {tabs && (
          <TabsContainer>
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                active={tab.value === selected}
                onClick={() => setSelected(tab.value)}
              >
                {tab.icon && <Icon icon={tab.icon} size={16} />}
                <Title>{tab.title}</Title>
              </Tab>
            ))}
          </TabsContainer>
        )}
      </Container>
    );
  }
)<TabsProps>`
  display: inline-flex;
  user-select: none;
  color: ${({ theme }) => theme.colors.accent.dark};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Container = styled.div`
  display: flex;
`;

const Tab = styled.div<{ active?: boolean }>`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accent.light};
  text-decoration-color: ${({ theme, active }) =>
    active ? theme.colors.layout.light : theme.colors.layout.lightest};
`;

const Title = styled.p`
  // margin-bottom: 8px;
  font-size: ${({ theme }) => theme.size.normal};
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default Tabs;
