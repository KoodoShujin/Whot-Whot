import { GameMode } from "../_/constants.types";

enum SelectVariants {
  PRIMARY = "select__primary",
}

type SelectOptionType = {
  value: string;
  id: GameMode;
};

export { SelectVariants, type SelectOptionType };
