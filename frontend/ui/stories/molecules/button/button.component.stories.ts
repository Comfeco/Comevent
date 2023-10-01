import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
//import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  IconLoadingComponent,
  TitleComponent,
  TitleType,
} from '../../../components';

type Story = StoryObj<ButtonComponent & { title: TitleType }>;
type StoryComponent = ButtonComponent & { title: TitleType };

const meta: Meta<StoryComponent> = {
  title: 'Components/Molecules/Button',
  component: ButtonComponent,
  //👇 Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, TitleComponent, IconLoadingComponent],
      imports: [CommonModule],
    }),
    //👇 Wrap our stories with a decorator (optional)
    // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  argTypes: {
    button: {
      options: ['button-base', 'button-disabled', 'button-ghost'],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'reset', 'submit'],
      control: { type: 'radio' },
    },
  },
  render: (args: StoryComponent) => {
    const { button, disabled, title, type, loading } = args;
    const { text, color } = title;

    return {
      props: { button, disabled, text, type, color, loading },
      template: `
      <c-button [button]="button" [disabled]="disabled" [type]="type" [title]="title" [loading]="loading">
      <c-title [text]="text" [color]="color"> Text example </c-title>
    </c-button>
      `,
    };
  },
};
export default meta;

export const BaseButton: Story = {
  args: {
    button: 'button-base',
    title: {
      text: 'body-medium-accent',
      color: 'white',
    },
  },
};

export const DisabledButton: Story = {
  args: {
    button: 'button-base',
    disabled: true,
    title: {
      text: 'body-medium-accent',
      color: 'white',
    },
  },
};

export const LoadingDisabledButton: Story = {
  args: {
    button: 'button-base',
    disabled: true,
    loading: true,
    title: {
      text: 'body-medium-accent',
      color: 'white',
    },
  },
};

export const GhostButton: Story = {
  args: {
    button: 'button-ghost',
    title: {
      text: 'body-medium-accent',
      color: 'primary',
    },
  },
};
