import { ButtonVariants } from "@/src/@types/atoms/Button.types";
import { noArg } from "@/src/@types/index.types";
import clsx from "clsx";
import { ReactComponentElement } from "react";

interface IProp {
  className?: string;
  children: String | ReactComponentElement<any, any>[];
  variant?: ButtonVariants;
  onClick?: noArg;
}

const { NORMAL } = ButtonVariants;

const Button = ({ children, variant = NORMAL, className, onClick }: IProp) => {
  switch (variant) {
    case NORMAL:
      className = clsx(
        className,
        "bg-tertiary txt-h6 txt-black5 py-[24px] px-[96px] rounded-[4px]"
      );
      break;
    default:
      break;
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
