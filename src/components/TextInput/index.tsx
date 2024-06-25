import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from "react";
import { ErrorMessage, InputBox, TextInputContainer } from "./styles";
import { FieldError } from "react-hook-form";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
};

export const TextInput = forwardRef(function TextInput(
  { optional, containerProps, error, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <TextInputContainer {...containerProps}>
      <InputBox>
        <input type="text" ref={ref} {...rest} />
        {optional && <span>opcional</span>}
      </InputBox>
      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </TextInputContainer>
  );
});
