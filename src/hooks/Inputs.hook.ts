import { useState } from "react";
import {
  InputInitialState,
  InputStateType,
  InputValidatorType,
  noArgReturn,
} from "../@types/index.types";

const useInputs = (initialState: InputInitialState[]) => {
  const [inputs, setInputs] = useState<InputStateType[]>([
    ...initialState.map((init: InputInitialState): InputStateType => {
      return {
        error: init.error ?? "",
        name: init.name,
        validateOnChange: init.validateOnChange ?? false,
        className: init.className ?? "",
        placeholder: init.placeholder ?? "",
        value: init.value ?? "",
        validations: [...(init.validations ?? [])],
      };
    }),
  ]);

  const setInputProp = (
    inputName: string,
    propKey: string,
    propValue: string | number
  ) => {
    setInputs((oldInputs) => {
      const newInputs: InputStateType[] = oldInputs.map((input: any) => {
        let isValid = true;
        if (
          input.name === inputName &&
          input.validateOnChange &&
          propKey === "value"
        ) {
          isValid = validateInput(inputName, propValue, input, "onChange");
        }

        if (input.name === inputName /*&& (isValid || !Boolean(propValue))*/) {
          input[propKey] = propValue;
        }

        return input;
      });

      return newInputs;
    });
  };

  const setInputValue = (name: string, value: string | number): void => {
    setInputProp(name, "value", value);
  };

  const setInputError = (name: string, error: string): void => {
    setInputProp(name, "error", error);
  };

  const validateInput = (
    name: string,
    value: string | number,
    inputState?: InputStateType | undefined,
    eventType?: "onChange" | "onSubmit" | undefined
  ): boolean => {
    const input: InputStateType =
      inputState ??
      inputs.find((input: InputStateType): boolean => {
        return input.name === name;
      })!;

    const isValid = Boolean(
      !input.validations
        .map((validator: any): boolean => {
          if (
            !(validator?.regExp?.test(String(value).trim()) ?? true) ||
            !(validator?.validate?.(String(value).trim()) ?? true)
          ) {
            if (
              eventType === "onChange" &&
              validator?.validateOnChange === false
            ) {
              return false;
            }

            setInputError(
              name,
              Boolean((value as string).trim()) || eventType === "onSubmit"
                ? validator.error
                : ""
            );
            return true;
          } else {
            return false;
          }
        })
        .reduce((a: boolean, b: boolean) => a || b)
    );

    if (isValid) {
      setInputError(name, "");
    }

    return isValid;
  };

  const validateAll = (): boolean => {
    return Boolean(
      inputs
        .map((input: InputStateType): boolean => {
          return validateInput(input?.name, input?.value, input, "onSubmit");
        })
        .filter((p: boolean) => p).length
    );
  };

  return {
    inputs,
    setInputValue,
    setInputError,
    validateInput,
    validateAll,
  };
};

export default useInputs;
