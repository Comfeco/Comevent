import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
//import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import {
  ChipComponent,
  ChipType,
  IconClearComponent,
  IconUserComponent,
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
      declarations: [
        ChipComponent,
        TitleComponent,
        IconClearComponent,
        IconUserComponent,
      ],
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
    const {
      colorIcon,
      colorText,
      text,
      type,
      disabled,
      icon,
      close = true,
      hover = true,
    } = args;

    return {
      props: { colorIcon, colorText, text, type, disabled, icon, close, hover },
      template: `
      <c-chip
        [colorIcon]="colorIcon"
        [colorText]="colorText"
        [text]="text" [type]="type"
        [disabled]="disabled"
        [icon]="icon"
        [close]="close"
        [hover]="hover"
      />
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

export const BaseChipIcon: Story = {
  args: {
    ...BaseChip.args,
    icon: true,
    close: false,
    hover: false,
  },
};
