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
  LabelComponent,
  LabelType,
  SelectComponent,
  SelectType,
} from '../../../components';

type StoryDetails = {
  label: LabelType;
};

type StoryComponent<T> = SelectType<T> & StoryDetails;

type Story<T> = StoryObj<StoryComponent<T>>;

const sharedFormControl = new FormControl('', Validators.required);
const numbers = [0, 1, 2, 3];

const meta: Meta<StoryComponent<number>> = {
  title: 'Components/Molecules/Select',
  component: SelectComponent,
  //👇 Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent, LabelComponent, ErrorInputComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
  ],
  argTypes: {
    options: {
      control: { type: 'select', options: numbers },
    },
    id: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args: StoryComponent<number>) => {
    const { label, id, name, options, placeholder, disabled } = args;
    const { variant, ...labelProps } = label;

    return {
      props: {
        id,
        name,
        options,
        variant,
        labelProps,
        sharedFormControl,
        placeholder,
        numbers,
        disabled,
      },
      template: `
      <c-label [variant]="variant" [for]="id">
        Label text
        <c-select
        [placeholder]="placeholder"
        [formControl]="sharedFormControl"
        [disabled]="disabled"
        [options]="numbers"
        [id]="id"
        [name]="name"></c-select>
      </c-label>
      `,
    };
  },
};
export default meta;

export const BaseSelect: Story<number> = {
  args: {
    id: '0',
    name: 'select',
    options: numbers,
    placeholder: 'Select some option',
    disabled: false,
    label: {
      variant: 'label-base',
    },
  },
};
