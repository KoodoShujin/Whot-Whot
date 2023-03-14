import { InputVariants } from "@/src/@types/atoms/Input.types";
import { eventArg, eventNoArg } from "@/src/@types/index.types";
import clsx from "clsx";
import { ReactElement } from "react";

interface Iprop {
  placeholder?: string | undefined;
  type?: "text" | "number" | "password";
  className?: string;
  variant?: InputVariants;
  onChange: eventArg<any>;
  value: string | number;
}

const { NORMAL } = InputVariants;

const Input = ({
  placeholder,
  type = "text",
  variant = NORMAL,
  onChange,
  className = "",
  value,
}: Iprop) => {
  switch (variant) {
    case NORMAL:
      className = clsx(className, "input__normal");
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
