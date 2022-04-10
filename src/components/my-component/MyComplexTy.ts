type MyKeys = 'display';
type Responsive<T> = {
  sm: T;
  md: T;
  lg: T;
};
type Values = Record<MyKeys, string>;

export type Token<T> = (T extends MyKeys ? Responsive<Values[T]> : never) | number;
