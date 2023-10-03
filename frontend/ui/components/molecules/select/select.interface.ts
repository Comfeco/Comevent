type RequiredSelectType<T> = {
  options: T[];
  id: string;
  name: string;
};

/* type OptionalSelectType = {
}; */

export type SelectType<T> = RequiredSelectType<T>;
