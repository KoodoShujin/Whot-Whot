import { useState } from "react";
import { InputInitialState, InputType } from "../@types/index.types";

const useInputs = (initialState: InputInitialState[]) => {
  // {
  //   error: "",
  //   setError: () => null,
  //   title: "Username",
  //   value: "",
  //   validations: [
  //     {
  //       regExp: /^.+$/,
  //       error: "Username is required",
  //     },
  //     {
  //       regExp: /^[a-zA-Z0-9]+$/,
  //       error: "Username must be alpha-numeric characters",
  //     },
  //     {
  //       regExp: /^[a-zA-Z0-9]{2,}+$/,
  //       error: "Username must be atleast 2 charcters",
  //     },
  //   ],
  // },
  const [inputs, setInputs] = useState<InputType[]>([]);

  return {
    inputs,
    setInputs,
  };
};

export default useInputs;
