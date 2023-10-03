type RequiredSelectType<T> = {
  options: T[];
  id: string;
  name: string;
  placeholder: string;
};

type OptionalSelectType = {
  disabled: boolean;
  variant: 'select-base';
};

export type SelectType<T> = RequiredSelectType<T> & Partial<OptionalSelectType>;
