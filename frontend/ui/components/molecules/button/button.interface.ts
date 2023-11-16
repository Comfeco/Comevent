type OptionalInputType = {
  type: 'button' | 'reset' | 'submit';
  disabled: boolean;
  loading: boolean;
  colorLoading: 'white' | 'disabled';
  variant: 'button-base' | 'button-disabled' | 'button-ghost' | 'button-accent';
};

export type ButtonType = Partial<OptionalInputType>;
