type noArg = () => void;
type arg<T> = (e: T) => void;
type argReturn<T, R = void> = (e: T) => R;
type noArgReturn<R = void> = () => R;

export type { noArg, arg, argReturn, noArgReturn };
