import { isSameDay, isSameMonth } from "date-fns";
import React from "react";
import {
  DateFormatter,
  DayPicker,
  DateRange,
  isDateRange,
} from "react-day-picker";
import { RiCalendarLine } from "react-icons/ri";
import styled from "styled-components";

import { DecoratorProps, withDecorator } from "../../hoc";
import Icon from "../Icon";
import { Menu, MenuButtonProps, MenuContainerProps } from "../Menu";
import Text from "../Text";

export type { DateFormatter, DateRange };

type Props = {
  format?: Intl.DateTimeFormatOptions;
  placeholder?: string;
  multiplePlaceholder?: string;
  rangePlaceholder?: string;
  menuContainerProps?: MenuContainerProps & DecoratorProps;
  menuButtonProps?: MenuButtonProps & DecoratorProps;
} & React.ComponentProps<typeof DayPicker>;

export type CalendarProps = Props;

export const formatWeekdayName: DateFormatter = (date, options) => {
  return date
    .toLocaleDateString(options?.locale?.code, { weekday: "short" })
    .slice(0, 1);
};

const CalendarComponent = styled(
  ({
    placeholder = "Select a date",
    multiplePlaceholder = "%s days selected",
    rangePlaceholder = "Select an end date",
    menuContainerProps,
    menuButtonProps,
    format,
    ...props
  }: CalendarProps) => {
    if (!format) {
      switch (props.mode) {
        case "range":
          if (
            props.selected?.from &&
            props.selected?.to &&
            isSameMonth(props.selected.from, props.selected.to)
          ) {
            format = {
              weekday: "short",
              day: "numeric",
            };
          } else {
            format = {
              weekday: "short",
              month: "short",
              day: "numeric",
            };
          }
          break;
        case "single":
        case "multiple":
        default:
          format = {
            weekday: "short",
            month: "short",
            day: "numeric",
          };
          break;
      }
    }

    return (
      <Menu.Container {...menuContainerProps}>
        <Menu.Button
          unstyled={false}
          prefix={<Icon icon={RiCalendarLine} />}
          type={"dark"}
          {...menuButtonProps}
        >
          <Text size={"small"}>
            {props.selected instanceof Date
              ? props.selected.toLocaleDateString(undefined, format)
              : props.selected instanceof Array &&
                  props.mode === "multiple" &&
                  props.selected.length > 0
                ? props.selected &&
                  props.selected.length === 1 &&
                  props.selected.every((d) => d instanceof Date)
                  ? props.selected[0].toLocaleDateString(undefined, format)
                  : multiplePlaceholder.replace(
                      "%s",
                      props.selected.length.toString(),
                    )
                : isDateRange(props.selected) && props.mode === "range"
                  ? props.selected.from && props.selected.to
                    ? isSameDay(props.selected.from, props.selected.to)
                      ? props.selected.from.toLocaleDateString(
                          undefined,
                          format,
                        )
                      : isSameMonth(props.selected.from, props.selected.to)
                        ? `${props.selected.from.toLocaleDateString(undefined, format)} - ${props.selected.to.toLocaleDateString(
                            undefined,
                            format,
                          )} ${props.selected.to.toLocaleDateString(undefined, {
                            month: "short",
                          })}`
                        : `${props.selected.from.toLocaleDateString(undefined, format)} - ${props.selected.to.toLocaleDateString(
                            undefined,
                            format,
                          )}`
                    : rangePlaceholder
                  : placeholder}
          </Text>
        </Menu.Button>
        <Menu.Content as={"div"} width={280}>
          <StyledDayPicker
            weekStartsOn={1}
            showOutsideDays
            formatters={{
              formatWeekdayName,
            }}
            {...props}
          />
        </Menu.Content>
      </Menu.Container>
    );
  },
)``;

const StyledDayPicker = styled(DayPicker)`
  &.rdp {
    padding: ${({ theme }) => theme.gap.tiny};

    .rdp-vhidden {
      display: none;
    }

    .rdp-caption {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .rdp-caption_label {
        font-size: ${({ theme }) => theme.size.small};
      }

      .rdp-nav {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.gap.normal};

        .rdp-button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: ${({ theme }) => theme.gap.tiny};
          transition: background-color 0.2s;
          padding: 0;

          .rdp-nav_icon {
            height: 10px;
            width: 10px;
            color: ${({ theme }) => theme.colors.text.light};
          }
        }
      }

      .rdp-caption_dropdowns {
        display: flex;
        gap: ${({ theme }) => theme.gap.small};
        align-items: center;

        .rdp-dropdown_month,
        .rdp-dropdown_year {
          position: relative;

          .rdp-dropdown {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }

          .rdp-caption_label {
            display: flex;
            gap: ${({ theme }) => theme.gap.tiny};
            align-items: center;
          }
        }
      }
    }

    .rdp-table {
      display: block;
      order-collapse: collapse;
      table-layout: fixed;
      margin-top: ${({ theme }) => theme.gap.small};

      .rdp-head {
        display: block;
        .rdp-head_row {
          display: flex;
          flex-wrap: nowrap;
          margin-top: ${({ theme }) => theme.gap.tiny};
          .rdp-head_cell {
            flex: 1;
            text-align: center;
            padding: 0;
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.size.tiny};
            color: ${({ theme }) => theme.colors.text.light};
          }
        }
      }

      .rdp-tbody {
        display: block;
        margin-top: ${({ theme }) => theme.gap.tiny};
        .rdp-row {
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          margin-top: ${({ theme }) => theme.gap.tiny};
          .rdp-cell {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: ${({ theme }) => theme.size.normal};
            transition: background-color 0.2s;
            width: 32px;
            height: 32px;
            padding: 0;

            .rdp-button {
              z-index: 1;
              outline: none;
              display: block;
              line-height: 30px;
              width: 32px;
              height: 32px;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              margin: 0;
              background-color: transparent;
              cursor: pointer;
              border: 1px solid transparent;
              transition:
                background-color 0.2s,
                border 0.2s,
                border-radius 0.2s;

              &:hover {
                border: 1px solid ${({ theme }) => theme.colors.layout.light};
              }

              &.rdp-day_outside,
              &.rdp-day_disabled {
                color: ${({ theme }) => theme.colors.text.light};
              }

              &.rdp-day_disabled {
                &:hover {
                  border: 1px solid transparent;
                  cursor: initial;
                }
              }

              &.rdp-day_today {
                background-color: ${({ theme }) => theme.colors.layout.dark};
              }

              &.rdp-day_selected {
                background-color: ${({ theme }) =>
                  theme.colors.layout.lightest};
                color: ${({ theme }) => theme.colors.text.darkest};
                border: 1px solid ${({ theme }) => theme.colors.layout.lightest};
              }

              &.rdp-day_range_middle {
                background-color: ${({ theme }) => theme.colors.layout.dark};
                color: ${({ theme }) => theme.colors.text.lightest};
                border: 1px solid transparent;
                border-radius: 0;
                height: 28px;
                line-height: 26px;

                &.rdp-day_today {
                  background-color: ${({ theme }) => theme.colors.layout.dark};
                  height: 32px;
                  line-height: 30px;
                  border-radius: 4px;
                }
              }
            }

            &:first-child {
              .rdp-button {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
              }
            }

            &:last-child {
              .rdp-button {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              }
            }
          }
        }
      }
    }
  }
`;

CalendarComponent.displayName = "KitchnCalendar";
export const Calendar = withDecorator(CalendarComponent);
export default Calendar;
