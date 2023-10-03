type EventsProps = {
  // Mouse Events
  onClick?: (event: MouseEvent) => any;
  onDoubleClick?: (event: MouseEvent) => any;
  onMouseDown?: (event: MouseEvent) => any;
  onMouseEnter?: (event: MouseEvent) => any;
  onMouseLeave?: (event: MouseEvent) => any;
  onMouseMove?: (event: MouseEvent) => any;
  onMouseOut?: (event: MouseEvent) => any;
  onMouseOver?: (event: MouseEvent) => any;
  onMouseUp$?: (event: MouseEvent) => any;
  // Keyboard Events
  onKeyDown?: (event: KeyboardEvent) => any;
  onKeyPress?: (event: KeyboardEvent) => any;
  onKeyUp?: (event: KeyboardEvent) => any;
  // Focus Events
  onFocus?: (event: FocusEvent) => any;
  onBlur?: (event: FocusEvent) => any;
  // Form Events
  onSubmit?: (event: Event) => any;
  // Touch Events
  onTouchCancel?: (event: TouchEvent) => any;
  onTouchEnd?: (event: TouchEvent) => any;
  onTouchMove?: (event: TouchEvent) => any;
  onTouchStart?: (event: TouchEvent) => any;
  // Others...
};

/* type RequiredInputType = {
  variant: 'button-base' | 'button-disabled' | 'button-ghost' | 'button-accent';
}; */

type OptionalInputType = {
  type: 'button' | 'reset' | 'submit';
  disabled: boolean;
  events: EventsProps;
  loading: boolean;
  colorLoading: 'white' | 'disabled';
  variant: 'button-base' | 'button-disabled' | 'button-ghost' | 'button-accent';
};

export type ButtonType = Partial<OptionalInputType>;
