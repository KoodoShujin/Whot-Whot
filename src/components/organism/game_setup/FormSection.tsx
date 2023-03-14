import { ButtonVariants } from "@/src/@types/atoms/Button.types";
import { FormVariants } from "@/src/@types/molecules/Form.types";
import useInputs from "@/src/hooks/Inputs.hook";
import clsx from "clsx";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Form from "../../molecules/Form";

interface IProps {
  className?: string;
}

const FormSection = ({ className = "" }: IProps) => {
  const inputsInitState = [
    
  ]

  const inputs = useInputs(inputsInitStates);

  return (
    <section className="form-section">
      <Form>
        <div className="flex gap-[32px]">
          <Input
            value={""}
            onChange={(e) => {}}
            placeholder={"Initial Card Per Player..."}
          />
          <Input
            value={""}
            onChange={(e) => {}}
            placeholder={"Play Time Per Player... (20s - 60s)"}
          />
        </div>

        <Button>Start Game</Button>
      </Form>
    </section>
  );
};

export default FormSection;
