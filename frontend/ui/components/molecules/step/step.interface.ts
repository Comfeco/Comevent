export enum Status {
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  PENDING = 'Pending',
}

type RequiredStepType = {
  info: string;
  status: Status;
  logo: 'basic' | 'pass' | 'area' | 'check';
};

export type StepType = RequiredStepType;
