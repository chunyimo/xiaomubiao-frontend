export enum AssetTypeEnum {
  DEMAND_SAVINGS = 'DEMAND_SAVINGS',
  FIXED_DEPOSIT = 'FIXED_DEPOSIT',
  EMERGENCY_SAVINGS = 'EMERGENCY_SAVINGS',
  INVESTED = 'INVESTED',
  INVESTING = 'INVESTING',
}
export interface IAsset  {
  _id: string;
  name: string;
  logo: string;
  type: AssetTypeEnum;
  where: string;
  value: number;
  createTime: string;
}