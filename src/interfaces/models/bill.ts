export enum BillTypeEnum {
  INCOME = 'INCOME',
  EXPENDITURE = 'EXPENDITURE',
}
export interface IBill  {
  _id: string;
  type: BillTypeEnum;
  project: string;
  account: number;
  time: Date;
  createTime: Date;
}