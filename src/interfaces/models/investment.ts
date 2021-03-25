export enum InvestmentTypeEnum {
  STOCK = 'STOCK',
  BONDS = 'BONDS',
  BITCOIN = 'BITCOIN',
  OTHER = 'OTHER',
}
export interface IInvestment  {
	_id: string;
  name: string;
  type: InvestmentTypeEnum;
  logo: string;
  value: number;
  costUnitPrice: number;
  currentUnitPrice: number;
  proportion: number;
  return: number;
  investTime: Date;
  createTime: Date;
}