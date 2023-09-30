import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  IconAreaComponent,
  IconBasicComponent,
  IconPassComponent,
  StepComponent,
  StepType,
} from '../../../components';

type StoryComponent = StepType;

type Story = StoryObj<StoryComponent>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Molecules/Step',
  component: StepComponent,
  // ? Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [
        StepComponent,
        IconAreaComponent,
        IconPassComponent,
        IconBasicComponent,
      ],
      imports: [CommonModule],
    }),
    /* // ? Decorator to handle logic related to args
    (Story, context) => {
      // ? If the logo is 'check', set the status to 'Completed'
      if (context.args.logo === 'check') {
        context.args.status = 'Completed';
      }

      return Story(context);
    }, */
  ],
  argTypes: {
    status: {
      options: ['Pending', 'In Progress', 'Completed'],
      control: { type: 'radio' },
    },
    logo: {
      options: ['basic', 'pass', 'area'],
      control: { type: 'radio' },
    },
  },
  render: (args: StoryComponent) => {
    const { logo, status } = args;

    return {
      props: { logo, status },
      template: `
        <c-step
        [status]="status"
        [logo]="logo"
        />
      `,
    };
  },
};
export default meta;

export const BasicStepPending: Story = {
  args: {
    logo: 'basic',
    status: 'Pending',
  },
};

export const BasicStepProgess: Story = {
  args: {
    logo: 'basic',
    status: 'In Progress',
  },
};

export const BasicStepCompleted: Story = {
  args: {
    logo: 'basic',
    status: 'Completed',
  },
};

export const PasswordStepPending: Story = {
  args: {
    logo: 'pass',
    status: 'Pending',
  },
};

export const PasswordStepProgess: Story = {
  args: {
    logo: 'pass',
    status: 'In Progress',
  },
};

export const PasswordStepCompleted: Story = {
  args: {
    logo: 'pass',
    status: 'Completed',
  },
};

export const AreaStepPending: Story = {
  args: {
    logo: 'area',
    status: 'Pending',
  },
};

export const AreaStepProgess: Story = {
  args: {
    logo: 'area',
    status: 'In Progress',
  },
};

export const AreaStepCheck: Story = {
  args: {
    logo: 'area',
    status: 'Completed',
  },
};
