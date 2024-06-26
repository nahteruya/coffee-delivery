import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { RadioContainer } from "./style";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: RadioProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <RadioContainer data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </RadioContainer>
  );
});
