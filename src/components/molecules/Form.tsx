import { eventArg } from "@/src/@types/index.types";
import { FormVariants } from "@/src/@types/molecules/Form.types";
import clsx from "clsx";
import {
  JSXElementConstructor,
  ReactComponentElement,
  ReactElement,
  ReactNode,
} from "react";

interface IProps {
  onSubmit?: eventArg<any>;
  className?: string;
  variant?: FormVariants;
  children?: ReactNode | ReactNode[];
}

const { NORMAL } = FormVariants;

const Form = ({
  variant = NORMAL,
  onSubmit,
  className = "",
  children,
}: IProps) => {
  switch (variant) {
    case NORMAL:
      className = clsx(className, "form__normal");
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
