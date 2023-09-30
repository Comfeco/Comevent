type RequiredStepType = {
  status: 'In Progress' | 'Completed' | 'Pending';
  logo: 'basic' | 'pass' | 'area' | 'check';
};

export type StepType = RequiredStepType;
