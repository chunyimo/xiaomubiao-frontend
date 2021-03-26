import { ReactNode, Reducer } from 'react';

export interface IModule {
  id: string;
  view: ReactNode;
  path: string;
  routeName: string;
  showLink: boolean;
  logo?: ReactNode;
  name?: string;
  reduer: Reducer<any, any>;
  saga: () => void;
}

export type IModules = IModule[]; 