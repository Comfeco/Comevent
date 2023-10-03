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
    variant: {
      options: [
        'button-base',
        'button-disabled',
        'button-ghost',
        'button-accent',
      ],
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
    const { variant, disabled, title, type, loading, colorLoading } = args;

    return {
      props: { variant, disabled, type, title, loading, colorLoading },
      template: `
      <c-button
      [variant]="variant"
      [disabled]="disabled"
      [type]="type"
      [title]="title"
      [loading]="loading"
      [colorLoading]="colorLoading">
      <c-title [variant]="title.variant" [color]="title.color"> Text example </c-title>
    </c-button>
      `,
    };
  },
};
export default meta;

export const BaseButton: Story = {
  args: {
    variant: 'button-base',
    title: {
      variant: 'body-medium-accent',
      color: 'white',
    },
  },
};

export const DisabledButton: Story = {
  args: {
    variant: 'button-base',
    disabled: true,
    title: {
      variant: 'body-medium-accent',
      color: 'white',
    },
  },
};

export const LoadingDisabledButton: Story = {
  args: {
    variant: 'button-base',
    disabled: true,
    loading: true,
    colorLoading: 'white',
    title: {
      variant: 'body-medium-accent',
      color: 'white',
    },
  },
};

export const GhostButton: Story = {
  args: {
    variant: 'button-ghost',
    title: {
      variant: 'body-medium-accent',
      color: '',
    },
  },
};

export const GhostLoadingDisabledButton: Story = {
  args: {
    variant: 'button-ghost',
    disabled: true,
    loading: true,
    colorLoading: 'disabled',
    title: {
      variant: 'body-medium-accent',
      color: 'disabled',
    },
  },
};

export const GhostDisabledButton: Story = {
  args: {
    variant: 'button-ghost',
    disabled: true,
    title: {
      variant: 'body-medium-accent',
      color: '',
    },
  },
};

export const AccentButton: Story = {
  args: {
    variant: 'button-accent',
    title: {
      variant: 'body-medium-accent',
      color: 'primary',
    },
  },
};
