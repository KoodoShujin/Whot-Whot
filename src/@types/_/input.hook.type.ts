import { argReturn } from "./functions.types";
import { makePartRequired, oneMustBeConstant } from "./utility.types";

type InputValidatorType = oneMustBeConstant<
  {
    regExp?: RegExp;
    error: string;
    validateOnChange?: boolean;
    validate?: argReturn<string, boolean>;
  },
  "regExp" | "validate"
>;

type InputStateType = {
  error: string;
  value: string | number;
  name: string;
  validateOnChange: boolean;
  className: string;
  placeholder: string;
  validations: InputValidatorType[];
};

type InputInitialState = makePartRequired<InputStateType, "name">;

export type { InputValidatorType, InputStateType, InputInitialState };
