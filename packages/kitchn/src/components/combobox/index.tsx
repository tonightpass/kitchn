import React from "react";
import styled from "styled-components";

import ComboboxDropdown from "./dropdown";
import ComboboxEmpty from "./empty";
import ComboboxItem, { ComboboxItemProps } from "./item";
import ComboboxSearching from "./searching";
import { ComboboxConfig, ComboboxContext } from "../../contexts";
import { withDecorator } from "../../hoc";
import { useCurrentState } from "../../hooks";
import { KitchnComponent } from "../../types";
import { pickChild } from "../../utils";
import Container, { ContainerProps } from "../container";
import Input, { InputProps } from "../input";

export type ComboboxOption = {
  label: string;
  value: string;
};

export type ComboboxOptions = (
  | typeof ComboboxItem
  | ComboboxOption
  | React.ReactElement<ComboboxItemProps>
)[];

type Props = {
  options?: ComboboxOptions;
  containerProps?: ContainerProps;
  initialValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onSelect?: (value: string) => void;
  disableMatchWidth?: boolean;
  disableFreeSolo?: boolean;
  value?: string;
  clearable?: boolean;
  searching?: boolean;
};

export type ComboboxProps = KitchnComponent<Props, InputProps>;

const childrenToOptionsNode = (options: ComboboxOption[]) =>
  options.map((item, index) => {
    if (React.isValidElement(item))
      return React.cloneElement(item, { key: index });
    const validItem = item as ComboboxOption;
    return (
      <ComboboxItem key={index} value={validItem.value} isLabelOnly>
        {validItem.label}
      </ComboboxItem>
    );
  });

const ForwardedCombobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      containerProps,
      initialValue: customInitialValue = "",
      clearable = false,
      searching,
      onChange,
      onSelect,
      onSearch,
      value,
      disabled,
      disableFreeSolo = false,
      disableMatchWidth = false,
      options = [],
      children,
      ...props
    }: ComboboxProps,
    comboxRef: React.Ref<HTMLInputElement | null>,
  ) => {
    const resetTimer = React.useRef<number>();
    const ref = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [state, setState, stateRef] =
      useCurrentState<string>(customInitialValue);
    const [selectVal, setSelectVal] =
      React.useState<string>(customInitialValue);
    const [visible, setVisible] = React.useState<boolean>(false);
    React.useImperativeHandle(comboxRef, () => inputRef.current);

    const [, searchChild] = pickChild(children, ComboboxSearching);
    const [, emptyChild] = pickChild(children, ComboboxEmpty);
    const comboboxItems = React.useMemo(() => {
      const hasSearchChild =
        searchChild && React.Children.count(searchChild) > 0;
      const hasEmptyChild = emptyChild && React.Children.count(emptyChild) > 0;
      if (searching) {
        return hasSearchChild ? (
          searchChild
        ) : (
          <ComboboxSearching>{"Searching..."}</ComboboxSearching>
        );
      }
      if (options.length === 0) {
        if (state === "") return null;
        return hasEmptyChild ? (
          emptyChild
        ) : (
          <ComboboxEmpty>{"No results"}</ComboboxEmpty>
        );
      }

      return childrenToOptionsNode(options as ComboboxOption[]);
    }, [searching, options, state]);

    const showClearIcon = React.useMemo(
      () => clearable && searching === undefined,
      [clearable, searching],
    );

    const updateValue = (val: string) => {
      if (disabled) return;
      setSelectVal(val);
      onSelect && onSelect(val);
      setState(val);
      inputRef.current && inputRef.current.focus();
    };
    const updateVisible = (next: boolean) => setVisible(next);
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (state === event.target.value || event.target.value === "") {
        setVisible(false);
      } else {
        setVisible(true);
      }
      onSearch && onSearch(event.target.value);
      setState(event.target.value);
    };
    const resetInputValue = () => {
      if (!disableFreeSolo) return;
      if (!state || state === "") return;
      if (state !== selectVal) {
        setState(selectVal);
      }
    };

    React.useEffect(() => {
      onChange && onChange(state);
    }, [state]);
    React.useEffect(() => {
      if (value === undefined) return;
      setState(value);
    }, [value]);

    const initialValue = React.useMemo<ComboboxConfig>(
      () => ({
        ref,
        value: state,
        updateValue,
        visible,
        updateVisible,
      }),
      [state, visible],
    );

    const toggleFocusHandler = (next: boolean) => {
      clearTimeout(resetTimer.current);

      if (next && state === "") {
        setVisible(false);
      } else {
        setVisible(next);
      }
      if (next) {
        onSearch && onSearch(stateRef.current);
      } else {
        resetTimer.current = window.setTimeout(() => {
          resetInputValue();
          clearTimeout(resetTimer.current);
        }, 100);
      }
    };

    const inputProps = {
      ...props,
      disabled,
      value: state,
    };

    return (
      <ComboboxContext.Provider value={initialValue}>
        <Container ref={ref} {...containerProps}>
          <Input
            ref={inputRef}
            onChange={onInputChange}
            onFocus={() => toggleFocusHandler(true)}
            onBlur={() => toggleFocusHandler(false)}
            onClick={() => toggleFocusHandler(true)}
            clearable={showClearIcon}
            {...inputProps}
          />

          <ComboboxDropdown
            visible={visible}
            disableMatchWidth={disableMatchWidth}
          >
            {comboboxItems}
          </ComboboxDropdown>
        </Container>
      </ComboboxContext.Provider>
    );
  },
);

ForwardedCombobox.displayName = "Combobox";

const ComboboxComponent = styled(ForwardedCombobox)``;

ComboboxComponent.displayName = "KitchnCombobox";
export const Combobox = withDecorator(ComboboxComponent);
export default Combobox;
