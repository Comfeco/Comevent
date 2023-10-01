import { Meta, StoryObj } from '@storybook/angular';
import { TitleComponent } from '../../../components';

type StoryType = TitleComponent & { text?: string };

const meta: Meta<StoryType> = {
  title: 'Components/Atoms/Title',
  component: TitleComponent,
  render: (args) => {
    const { text, ...props } = args;
    return {
      props,
      template: `
        <c-title [css]="css" [color]="color">
          ${text}
        </c-title>
      `,
    };
  },
  argTypes: {
    text: {
      control: {
        type: 'select',
        options: [
          'title-h1',
          'title-h2',
          'title-h3',
          'title-h4',
          'title-h5',
          'title-h6',
          'body-bigger',
          'body-medium',
          'body-small',
          'body-medium-accent',
          'body-smaller',
        ],
      },
    },
  },
  args: {
    text: 'title-h1',
  },
};
export default meta;

type Story = StoryObj<StoryType>;

export const TitleH1: Story = {
  args: {
    text: 'title-h1',
  },
};
