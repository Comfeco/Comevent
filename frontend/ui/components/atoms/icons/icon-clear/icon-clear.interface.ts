/* type RequiredIconClearType = {

}; */

type OptionalIconClearType = {
  type: 'solid' | 'outlined';
  color: 'error' | 'gray';
};

export type IconClearType = Partial<OptionalIconClearType>;
