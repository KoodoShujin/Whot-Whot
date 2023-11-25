import { InputVariants } from "@/src/@types/atoms/Input.types";
import { arg, noArg } from "@/src/@types/index.types";
import clsx from "clsx";
import {
  ForwardedRef,
  MutableRefObject,
  ReactElement,
  forwardRef,
} from "react";

interface Iprop {
  placeholder?: string | undefined;
  type?: "text" | "number" | "password";
  className?: string;
  variant?: InputVariants;
  onChange: arg<any>;
  value: string | number;
}

const { PRIMARY } = InputVariants;

const Input = (
  {
    placeholder,
    type = "text",
    variant = PRIMARY,
    onChange,
    className = "",
    value,
  }: Iprop,
  ref: ForwardedRef<HTMLInputElement>
) => {
  switch (variant) {
    default:
      className = clsx(className, variant);
      break;
  }

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => {
        onChange?.(e);
      }}
      ref={ref}
    />
  );
};

export type { Iprop as InputProp };
export default forwardRef(Input);
