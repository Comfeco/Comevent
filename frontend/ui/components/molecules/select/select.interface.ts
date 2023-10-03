type RequiredSelectType<T> = {
  options: T[];
  id: string;
  name: string;
  placeholder: string;
};

type OptionalSelectType = {
  disabled: boolean;
};

export type SelectType<T> = RequiredSelectType<T> & Partial<OptionalSelectType>;
