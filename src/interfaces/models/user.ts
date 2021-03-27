import { IAsset } from './asset';
import { IBill } from './bill';
import { IInvestment } from './investment';
import { IPlanB } from './planb';

export interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  profilePhoto: string;
  bills: [IBill['_id']];
  investments: [IInvestment['_id']];
  assets: [IAsset['_id']];
  planBs: [IPlanB['_id']];
  creatTime: Date;
}