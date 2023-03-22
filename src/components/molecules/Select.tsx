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

const { PRIMARY } = SelectVariants;

const Select = ({
  placeholder,
  className,
  variant = PRIMARY,
  options,
  value,
  wrapperClassName,
}: oneMustBeConstant<IProps, "placeholder" | "value">) => {
  switch (variant) {
    case PRIMARY:
      wrapperClassName = clsx(wrapperClassName, "select");
      className = clsx(className, PRIMARY);
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
          {options?.map((opt: SelectOptionType, i: number) => {
            return <option key={`select_opt_${i}`}> {opt?.value}</option>;
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
