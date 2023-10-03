import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
//import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import {
  ChipComponent,
  ChipType,
  IconClearComponent,
  TitleComponent,
} from '../../../components';

type Story = StoryObj<ChipType>;
type StoryComponent = ChipType;

const meta: Meta<StoryComponent> = {
  title: 'Components/Molecules/Chip',
  component: ChipComponent,
  //👇 Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [ChipComponent, TitleComponent, IconClearComponent],
      imports: [CommonModule],
    }),
    //👇 Wrap our stories with a decorator (optional)
    // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  /* argTypes: {
    disabled: {
      control: 'boolean',
    },
    colorText: {
      options: ['', 'white', 'black', 'primary', 'disabled'],
      control: 'select',
    },
    text: {
      control: 'text',
    },
    colorIcon: {
      options: ['error', 'gray'],
      control: 'select',
    },
    type: {
      options: ['outlined', 'solid'],
      control: 'select',
    },
  }, */
  render: (args: StoryComponent) => {
    const { colorIcon, colorText, text, type, disabled } = args;

    return {
      props: { colorIcon, colorText, text, type, disabled },
      template: `
      <c-chip [colorIcon]="colorIcon" [colorText]="colorText" [text]="text" [type]="type" [disabled]="disabled" />
      `,
    };
  },
};
export default meta;

export const BaseChip: Story = {
  args: {
    colorText: 'primary',
    text: 'body-medium',
    colorIcon: 'gray',
    type: 'solid',
  },
};

export const BaseChipDisabled: Story = {
  args: {
    ...BaseChip.args,
    disabled: true,
  },
};
