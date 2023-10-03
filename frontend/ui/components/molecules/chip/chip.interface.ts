type RequiredChipType = {
  text:
    | 'title-h1'
    | 'title-h2'
    | 'title-h3'
    | 'title-h4'
    | 'title-h5'
    | 'title-h6'
    | 'body-bigger'
    | 'body-medium'
    | 'body-small'
    | 'body-medium-accent'
    | 'body-smaller';
  colorText: 'white' | 'black' | 'primary' | 'disabled' | '';
};

type OptionalChipType = {
  type: 'solid' | 'outlined';
  colorIcon: 'error' | 'gray';
  disabled: boolean;
  icon: boolean;
  close: boolean;
  hover: boolean;
};

export type ChipType = RequiredChipType & Partial<OptionalChipType>;
