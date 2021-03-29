import React, { ReactNode } from 'react';
import ResizeBox from '../../../components/ResizeBox';

export interface IDashboardProps {
  children?: ReactNode;
}
const PREFIX = 'Dashboard';
const Dashboard: React.FC<IDashboardProps> = (props) => {
  return <div className={`${PREFIX}`}><ResizeBox/></div>;
};
export default React.memo(Dashboard);
