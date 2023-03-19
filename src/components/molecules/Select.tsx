import { Icons } from "@/src/@types/atoms/Icon.types";
import { oneMustBeConstant } from "@/src/@types/index.types";
import {
  SelectOptionType,
  SelectVariants,
} from "@/src/@types/molecules/Select.types";
import clsx from "clsx";
import { useState } from "react";
import Icon from "../atoms/Icon";

interface IProps {
  placeholder?: string | undefined;
  className?: string;
  variant?: SelectVariants;
  options: SelectOptionType[];
  wrapperClassName?: string;
  value?: string | number;
}

const { NORMAL } = SelectVariants;

const Select = ({
  placeholder,
  className,
  variant = NORMAL,
  options,
  value,
  wrapperClassName,
}: oneMustBeConstant<IProps, "placeholder" | "value">) => {
  switch (variant) {
    case NORMAL:
      wrapperClassName = clsx(wrapperClassName, "select");
      className = clsx(className, "select__normal");
      break;
    default:
      break;
  }

  const [visibilty, setVisibility] = useState<boolean>(false);

  return (
    <div className={wrapperClassName}>
      <div
        className={clsx(className, "cursor-pointer")}
        onClick={() => setVisibility(!visibilty)}
      >
        {placeholder && (
          <div className="select__placeholder">{placeholder}</div>
        )}
        <div className="cursor-pointer">
          <Icon
            icon={visibilty ? Icons.CARET_UP : Icons.CARET_DOWN}
            alt="Caret"
          ></Icon>
        </div>
      </div>
      {visibilty && (
        <div className="select__options">
          {options?.map((opt: SelectOptionType) => {
            return <option> {opt?.value}</option>;
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
