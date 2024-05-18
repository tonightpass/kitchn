import React, { forwardRef } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import styled from "styled-components";

import Input, { InputProps } from "..";
import { withDecorator } from "../../../hoc";
import { KitchnComponent } from "../../../types";

type Props = {
  hideToggle?: boolean;
};

export type InpuPasswordProps = KitchnComponent<Props, InputProps>;

const ForwardedInputPassword = forwardRef<HTMLInputElement, InpuPasswordProps>(
  (
    { hideToggle = false, ...props }: InpuPasswordProps,
    ref: React.Ref<HTMLInputElement | null>,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [visible, setVisible] = React.useState<boolean>(false);
    React.useImperativeHandle(ref, () => inputRef.current);

    const iconClickHandler = () => {
      setVisible((v) => !v);
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    };

    const inputProps = React.useMemo(
      () => ({
        ...props,
        ref: inputRef,
        clickableIcon: true,
        onIconClick: iconClickHandler,
        htmlType: visible ? "text" : "password",
      }),
      [props, iconClickHandler, visible, inputRef],
    );

    const icon = React.useMemo(() => {
      if (hideToggle) return null;
      return visible ? RiEyeLine : RiEyeCloseLine;
    }, [hideToggle, visible]);

    return <Input suffixIcon={icon} {...props} {...inputProps} />;
  },
);

ForwardedInputPassword.displayName = "PasswordInput";

const InputComponent = styled(ForwardedInputPassword)``;

InputComponent.displayName = "KitchnPasswordInput";
export const PasswordInput = withDecorator(InputComponent);
export default PasswordInput;
