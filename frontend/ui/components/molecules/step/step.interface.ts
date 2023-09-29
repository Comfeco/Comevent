type RequiredStepType = {};

type OptionalStepType = {};

export type StepType = RequiredStepType & Partial<OptionalStepType>;
