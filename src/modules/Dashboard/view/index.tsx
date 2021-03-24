import React, { ReactNode } from 'react';

export interface IDashboardProps {
  children?: ReactNode;
}
const PREFIX = 'Dashboard';
const Dashboard: React.FC<IDashboardProps> = (props) => {
  return <div className={`${PREFIX}`}></div>;
};
export default React.memo(Dashboard);
