import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
//import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ErrorInputComponent,
  InputComponent,
  InputProps,
  InputType,
  LabelComponent,
} from '@ui/components';

type StoryDetails = {
  label: LabelComponent & { text: string };
};

type StoryComponent = (InputType & InputProps) & StoryDetails;

type Story = StoryObj<StoryComponent>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Molecules/Input',
  component: InputComponent,
  //👇 Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [InputComponent, LabelComponent, ErrorInputComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    //👇 Wrap our stories with a decorator (optional)
    // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  argTypes: {
    css: {
      options: ['input-primary', 'input-secondary', 'input-tertiary'],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    type: {
      options: ['number', 'text', 'email', 'password'],
      control: { type: 'radio' },
    },
  },
  render: (args: StoryComponent) => {
    console.log('Render called with args:', args);
    const { label, ...inputProps } = args;
    const { text, ...inputLabel } = label;

    const sharedFormControl = new FormControl('', Validators.required);

    return {
      props: { inputProps, inputLabel, sharedFormControl },
      template: `
      <c-label [css]="inputLabel.css">
        ${text}
        <c-input
        [css]="inputProps.css"
        [type]="inputProps.type"
        [placeholder]="inputProps.placeholder"
        [formControl]="sharedFormControl"
        [disabled]="inputProps.disabled"
        [name]="inputProps.name"></c-input>
      </c-label>

      `,
    };
  },
};
export default meta;

export const PrimaryInput: Story = {
  args: {
    css: 'input-primary',
    type: 'text',
    placeholder: 'Entry text',
    disabled: false,
    name: 'example',
    formControl: new FormControl('', Validators.required),
    label: {
      css: 'label-primary',
      text: 'Label text',
    },
  },
};
