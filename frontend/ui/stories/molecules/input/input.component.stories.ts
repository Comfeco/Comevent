import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  ErrorInputComponent,
  IconClearComponent,
  IconHiddenPassComponent,
  IconShowPassComponent,
  InputComponent,
  InputType,
  LabelComponent,
  LabelType,
} from '../../../components';

type StoryDetails = {
  label: LabelType;
};

type StoryComponent = InputType & StoryDetails;

type Story = StoryObj<StoryComponent>;

const sharedFormControl = new FormControl('', Validators.required);

const meta: Meta<StoryComponent> = {
  title: 'Components/Molecules/Input',
  component: InputComponent,
  //👇 Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [
        InputComponent,
        LabelComponent,
        ErrorInputComponent,
        IconClearComponent,
        IconShowPassComponent,
        IconHiddenPassComponent,
      ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
  ],
  argTypes: {
    variant: {
      options: ['input-base', 'input-secondary', 'input-tertiary'],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    type: {
      options: ['number', 'text', 'email', 'password'],
      control: { type: 'radio' },
    },
  },
  render: (args: StoryComponent) => {
    const { label, ...inputProps } = args;
    const { css, ...labelProps } = label;

    return {
      props: { inputProps, css, labelProps, sharedFormControl },
      template: `
      <c-label [css]="css" [for]="inputProps.id">
        Label text
        <c-input
        [variant]="inputProps.css"
        [type]="inputProps.type"
        [placeholder]="inputProps.placeholder"
        [formControl]="sharedFormControl"
        [disabled]="inputProps.disabled"
        [id]="inputProps.id"
        [showPassword]="inputProps.showPassword"
        [name]="inputProps.name"></c-input>
      </c-label>

      `,
    };
  },
};
export default meta;

export const PrimaryInput: Story = {
  args: {
    variant: 'input-base',
    type: 'text',
    placeholder: 'Entry text',
    name: 'example',
    id: 'example',
    showPassword: false,
    disabled: false,
    label: {
      css: 'label-primary',
    },
  },
};
