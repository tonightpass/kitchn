import React from "react";
import {
  FieldValues,
  ControllerProps,
  Control,
  Controller,
  Path,
} from "react-hook-form";
import Input, { type InputProps } from "..";

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
  Omit<InputProps, "onChange" | "onBlur" | "value" | "errorMessage">
> &
  InputProps;

const ControlledInput = React.forwardRef(
  <F extends FieldValues>(
    { name, control, controllerProps, ...props }: ControlledTextInputProps<F>,
    ref: React.Ref<HTMLInputElement>
  ) => (
    <Controller
      name={name}
      control={control}
      {...controllerProps}
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
  )
);

ControlledInput.displayName = "ControlledInput";

export default ControlledInput;
