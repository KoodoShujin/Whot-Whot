import { arg } from "@/src/@types/index.types";
import { FormVariants } from "@/src/@types/molecules/Form.types";
import clsx from "clsx";
import {
  JSXElementConstructor,
  ReactComponentElement,
  ReactElement,
  ReactNode,
} from "react";

interface IProps {
  onSubmit?: arg<any>;
  className?: string;
  variant?: FormVariants;
  children?: ReactNode | ReactNode[];
}

const { PRIMARY } = FormVariants;

const Form = ({
  variant = PRIMARY,
  onSubmit,
  className = "",
  children,
}: IProps) => {
  switch (variant) {
    case PRIMARY:
      className = clsx(className, PRIMARY);
      break;
    default:
      break;
  }
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
