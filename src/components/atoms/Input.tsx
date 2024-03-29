import { InputVariants } from "@/src/@types/atoms/Input.types";
import { arg, noArg } from "@/src/@types/index.types";
import clsx from "clsx";
import { ReactElement } from "react";

interface Iprop {
  placeholder?: string | undefined;
  type?: "text" | "number" | "password";
  className?: string;
  variant?: InputVariants;
  onChange: arg<any>;
  value: string | number;
}

const { PRIMARY } = InputVariants;

const Input = ({
  placeholder,
  type = "text",
  variant = PRIMARY,
  onChange,
  className = "",
  value,
}: Iprop) => {
  switch (variant) {
    case PRIMARY:
      className = clsx(className, PRIMARY);
      break;
    default:
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
    />
  );
};

export default Input;
