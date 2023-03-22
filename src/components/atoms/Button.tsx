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

const { PRIMARY } = ButtonVariants;

const Button = ({ children, variant = PRIMARY, className, onClick }: IProp) => {
  switch (variant) {
    default:
      className = clsx(className, variant);
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
