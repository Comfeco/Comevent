import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
//import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import {
  ChipComponent,
  IconClearComponent,
  IconClearType,
  TitleComponent,
  TitleType,
} from '../../../components';

type Story = StoryObj<
  ChipComponent & { title: TitleType; iconClear: IconClearType }
>;
type StoryComponent = ChipComponent & {
  title: TitleType;
  iconClear: IconClearType;
};

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

  }, */
  render: (args: StoryComponent) => {
    const { title, iconClear } = args;
    const { text, color } = title;

    return {
      props: { text, color, iconClear },
      template: `
      <c-chip>
      <c-title [text]="text" [color]="color"> Text example </c-title>
      <icon-clear [color]="iconClear.color" [type]="iconClear.type" />
    </c-chip>
      `,
    };
  },
};
export default meta;

export const BaseChip: Story = {
  args: {
    title: {
      text: 'body-medium',
      color: 'primary',
    },
    iconClear: {
      color: 'gray',
      type: 'solid',
    },
  },
};
