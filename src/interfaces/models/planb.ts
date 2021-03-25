export enum PlanBStateEnum {
  ON = 'ON',
  OFF = 'OFF',
}
export enum PlanBTrendEnum {
  UP = 'UP',
  DOWN = 'DOWN',
}
export interface IPlanB  {
  _id: string;
  name: string;
  targetName: string;
  State: PlanBStateEnum;
  startTime: Date;
  trend: PlanBTrendEnum;
  anchor: number;
  targetPoint: number;
  resistanceLevel: { type: number; min: 1; max: 5 };
  pushForceLevel: { type: number; min: 1; max: 5 };
  intervalTime: Date;
  createTime: Date;
}