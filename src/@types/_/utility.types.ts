// it makes one of a set of fields from an interface to be required
type oneMustBeConstant<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> &
  {
    [key in U]: Required<Pick<T, key>>;
  }[U];

// it makes part of an interface to be required and the other part optional
// the part to be made required is passed as a union through the U generic
type makePartRequired<T, U extends keyof T> = {
  [key in U]: Required<Pick<T, key>>[key];
} & Partial<Omit<T, U>>;

// it makes part of an interface to be optional and the other part Required
// the part to be made optional is passed as a union through the U generic
type makePartPartial<T, U extends keyof T> = {
  [key in U]: Partial<Pick<T, key>>[key];
} & Required<Omit<T, U>>;

export type { oneMustBeConstant, makePartRequired, makePartPartial };
