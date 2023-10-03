/* type RequiredIconClearType = {

}; */

type OptionalIconClearType = {
  type: 'solid' | 'outlined';
  color: 'error' | 'gray';
  parentHovered: boolean;
};

export type IconClearType = Partial<OptionalIconClearType>;
