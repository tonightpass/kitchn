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
  ({ tabs, disabled = false, selected, setSelected, ...props }: TabsProps) => {
    // // if disabled is true prevent the user from selecting a tab
    // if (disabled) {
    //   (event: React.ChangeEvent<HTMLDivElement>) => event.preventDefault();
    // }
    return (
      <Container {...props}>
        {tabs &&
          tabs.map((tab) => (
            <TabContainer
              key={tab.value}
              // if disabled is true prevent the user from selecting a tab when clicked
              onClick={
                disabled
                  ? (event) => event.preventDefault()
                  : () => setSelected(tab.value)
              }
              // onClick={() => setSelected(tab.value)}
              active={selected === tab.value}
            >
              <Tab active={selected === tab.value} disabled={disabled}>
                {tab.icon && (
                  <IconTab>
                    <Icon icon={tab.icon} />
                  </IconTab>
                )}
                <Title>{tab.title}</Title>
              </Tab>
            </TabContainer>
          ))}
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

const TabContainer = styled.div<{ active?: boolean }>`
  display: flex;
  border-bottom: 2px solid
    ${({ theme, active }) =>
      active ? theme.colors.layout.light : theme.colors.layout.lightest};
  align-items: center;
  margin: 0 0 -1px;
  :first-child {
    padding: 0 12px 0 0;
  }
  :not(:first-child) {
    padding: 0 12px;
  }
`;

const Tab = styled.div<{ active?: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ theme }) => theme.colors.accent.light};
  margin: 0 0 -1px;
  padding: 6px 2px;
`;

const IconTab = styled.div`
  margin-right: 6px;
  // margin-bottom: -2px;
`;

const Title = styled.p`
  // margin-bottom: 8px;
  font-size: ${({ theme }) => theme.size.normal};
`;

export default Tabs;
