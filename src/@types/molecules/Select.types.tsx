import { GameMode } from "../_/constants.types";

enum SelectVariants {
  NORMAL,
}

type SelectOptionType = {
  value: string;
  id: GameMode;
};

export { SelectVariants, type SelectOptionType };
