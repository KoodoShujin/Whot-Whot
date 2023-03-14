type noArg = () => void;
type eventNoArg = () => void;
type eventArg<T> = (e: T) => void;

type InputType = {
  error: string;
  setError: noArg;
  value: string | number;
  title: string;
  validations: {
    regExp: RegExp;
    error: string;
  }[];
};

type InputInitialState = {
  title: string;
  validations: {
    regExp: RegExp;
    error: string;
  }[];
};

export type { eventNoArg, eventArg, InputType, InputInitialState };
