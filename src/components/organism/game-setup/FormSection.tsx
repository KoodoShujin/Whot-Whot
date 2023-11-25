import { ButtonVariants } from "@/src/@types/atoms/Button.types";
import {
  GameMode,
  InputInitialState,
  InputStateType,
} from "@/src/@types/index.types";
import useInputs from "@/src/hooks/Inputs.hook";
import { isNumber, isRange, isRequired } from "@/src/utils/validator.creator";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Form from "../../molecules/Form";
import Select from "../../molecules/Select";

interface IProps {
  className?: string;
}

const FormSection = ({}: IProps) => {
  const inputsInitStates: InputInitialState[] = [
    {
      name: "initialCardPerPlayer",
      placeholder: "Initial Card Per Player...",
      validateOnChange: true,
      validations: [isRange(3, 10), isNumber(), isRequired()],
    },
    {
      name: "playTimePerPlayer",
      placeholder: "Play Time Per Player... (20s - 60s)",
      validateOnChange: true,
      validations: [isRange(3, 10), isNumber(), isRequired()],
    },
  ];

  const { inputs, setInputValue, validateAll } = useInputs(inputsInitStates);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const isInputsValid: boolean = validateAll();
  };

  const { SINGLE_PLAYER, MULTI_PLAYER } = GameMode;
  const { PRIMARY_FILL, BLACK75_FILL } = ButtonVariants;

  return (
    <section className=".form-section_gsg">
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
          <Select
            placeholder="Game Mode"
            wrapperClassName="col-span-2"
            options={[
              {
                value: "Single Player",
                id: SINGLE_PLAYER,
              },
              {
                value: "Multi Player",
                id: MULTI_PLAYER,
              },
            ]}
          ></Select>
        </div>

        <div className="flex gap-[32px] w-full">
          <Button variant={BLACK75_FILL}>Settings</Button>
          <Button variant={PRIMARY_FILL}>Start Game</Button>
        </div>
      </Form>
    </section>
  );
};

export default FormSection;
