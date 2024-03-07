import React from "react";
import {
  FieldValues,
  ControllerProps,
  Control,
  Controller,
  Path,
} from "react-hook-form";

import Input, { type InputProps } from "..";
import { withDecorator } from "../../../hoc/withDecorator";

type ControllerPropsEx<F extends FieldValues> = Omit<
  ControllerProps<F>,
  "render" | "control" | "name"
>;

type ControlledType<F extends FieldValues, T> = {
  name: Path<F>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  controllerProps?: ControllerPropsEx<F>;
} & T;

type ControlledTextInputProps<F extends FieldValues> = ControlledType<
  F,
  Omit<
    InputProps,
    "onChange" | "onBlur" | "value" | "errorMessage" | "ref" | "name"
  >
> &
  InputProps;

const ControlledInputComponent = React.forwardRef(
  <F extends FieldValues>(
    { name, control, controllerProps, ...props }: ControlledTextInputProps<F>,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Controller
      name={name}
      control={control}
      {...controllerProps}
      rules={{
        ...controllerProps?.rules,
      }}
      render={({
        field: { onBlur, onChange, value, name },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <Input
          {...props}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={error?.message}
          disabled={isSubmitting}
        />
      )}
    />
  ),
);

ControlledInputComponent.displayName = "KitchenControlledInput";
export const ControlledInput = withDecorator(ControlledInputComponent);
export default ControlledInput;
