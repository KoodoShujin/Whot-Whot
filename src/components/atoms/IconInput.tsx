import { IconInputVariants } from "@/src/@types/atoms/IconInput.types";
import Icon, { IconProp } from "./Icon";
import Input, { InputProp } from "./Input";
import clsx from "clsx";
import { InputVariants } from "@/src/@types/atoms/Input.types";
import { createRef } from "react";

interface Iprop {
  input: InputProp;
  leftIcon?: IconProp;
  rightIcon?: IconProp;
  variant?: IconInputVariants;
  className?: string;
}

const IconInput = ({
  input,
  leftIcon,
  rightIcon,
  variant = IconInputVariants?.PRIMARY,
  className,
}: Iprop) => {
  switch (variant) {
    default:
      className = clsx(className, variant);
      break;
  }

  //setting the default input variant
  input.variant = InputVariants.ICON_INPUT;
  const inputRef = createRef<HTMLInputElement>();

  const focusInput = () => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  };

  return (
    <div className={className} onClick={focusInput}>
      {leftIcon ? <Icon {...leftIcon} /> : null}
      <Input {...input} ref={inputRef} />
      {rightIcon ? <Icon {...rightIcon} /> : null}
    </div>
  );
};

export default IconInput;
