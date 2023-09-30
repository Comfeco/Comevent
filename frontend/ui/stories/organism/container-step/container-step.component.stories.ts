import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  ContainerStepComponent,
  IconAreaComponent,
  IconBasicComponent,
  IconPassComponent,
  StepComponent,
  StepType,
} from '../../../components';

type StoryComponent = {
  steps: StepType[];
};

type Story = StoryObj<StoryComponent>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Organism/ContainerStep',
  component: ContainerStepComponent,
  //👇 Import both components to allow component compositing with Storybook
  decorators: [
    moduleMetadata({
      declarations: [
        ContainerStepComponent,
        StepComponent,
        IconAreaComponent,
        IconPassComponent,
        IconBasicComponent,
      ],
      imports: [CommonModule],
    }),
    //👇 Wrap our stories with a decorator (optional)
    // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  render: (args: StoryComponent) => {
    const { steps } = args;

    const stepsTemplate = steps
      .map((step) => `<c-step [status]="${step.status}" [logo]="${step.logo}">`)
      .join('');

    return {
      props: {},
      template: `
      <c-container-step [containerStatus]="containerStatus">
        ${{ stepsTemplate }}
      </c-container-step>
      `,
    };
  },
};
export default meta;

export const StepOneContainerStep: Story = {
  args: {
    steps: [
      {
        logo: 'basic',
        status: 'In Progress',
      },
      {
        logo: 'pass',
        status: 'Pending',
      },
      {
        logo: 'area',
        status: 'Pending',
      },
    ],
  },
};
