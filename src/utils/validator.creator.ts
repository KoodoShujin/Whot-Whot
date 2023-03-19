import {
  argReturn,
  InputValidatorType,
  noArgReturn,
} from "../@types/index.types";

const isRequired: noArgReturn<InputValidatorType> = () => {
  return {
    regExp: /.+/,
    error: "It is Required",
  };
};

const isNumber: noArgReturn<InputValidatorType> = () => {
  return {
    regExp: /^\d*$/,
    error: "It must be a number",
  };
};

const isRange = (min: number, max: number): InputValidatorType => {
  return {
    validateOnChange: true,
    validate: (value: string) =>
      Boolean(Number(value) >= min && Number(value) <= max),
    error: `It is number between ${min} and ${max}`,
  };
};

export { isRequired, isNumber, isRange };
