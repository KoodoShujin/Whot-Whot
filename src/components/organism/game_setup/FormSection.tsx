import { ButtonVariants } from "@/src/@types/atoms/Button.types";
import {
  InputInitialState,
  InputStateType,
  noArgReturn,
} from "@/src/@types/index.types";
import { FormVariants } from "@/src/@types/molecules/Form.types";
import useInputs from "@/src/hooks/Inputs.hook";
import clsx from "clsx";
import { validateConfig } from "next/dist/server/config-shared";
import { ReactNode, useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Form from "../../molecules/Form";

interface IProps {
  className?: string;
}

const FormSection = ({}: IProps) => {
  const inputsInitStates: InputInitialState[] = [
    {
      name: "initialCardPerPlayer",
      placeholder: "Initial Card Per Player...",
      validateOnChange: true,
      validations: [
        {
          regExp: /.+/,
          error: "It is Required",
        },
        {
          regExp: /^\d*$/,
          error: "It must be a number",
        },
        {
          validateOnChange: true,
          validate: (value: string) =>
            Boolean(Number(value) >= 3 && Number(value) <= 10),
          error: "It is number between 3 and 10",
        },
      ].reverse(),
    },
    {
      name: "playTimePerPlayer",
      placeholder: "Play Time Per Player... (20s - 60s)",
      validateOnChange: true,
      validations: [
        {
          regExp: /.+/,
          error: "It is Required",
        },
        {
          regExp: /^\d*$/,
          error: "It must be a number",
        },
        {
          validateOnChange: true,
          validate: (value: string) =>
            Boolean(Number(value) >= 20 && Number(value) <= 60),
          error: "It is number between 20 and 60",
        },
      ].reverse(),
    },
  ];

  const { inputs, setInputValue, validateAll } = useInputs(inputsInitStates);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const isInputsValid: boolean = validateAll();

    console.log({ isInputsValid });
  };

  return (
    <section className="form-section">
      <Form onSubmit={onSubmit}>
        <div className="grid grid-cols-[1fr_1fr] gap-[32px]">
          {inputs.map((input: InputStateType): any => {
            return (
              <div className="flex flex-col gap-[16px]" key={input.name}>
                <Input
                  value={input.value}
                  className={input.className}
                  onChange={(e: any) => {
                    setInputValue(input.name, e.target.value);
                  }}
                  placeholder={input.placeholder}
                />
                {Boolean(input.error) && (
                  <div className="error">* {input.error}</div>
                )}
              </div>
            );
          })}
        </div>

        <Button>Start Game</Button>
      </Form>
    </section>
  );
};

export default FormSection;
