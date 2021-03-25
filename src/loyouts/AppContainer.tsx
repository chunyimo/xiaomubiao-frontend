import React, { ReactNode } from 'react';

export interface IAppContainerProps {
  children?: ReactNode;
}
const PREFIX = 'AppContainer';
const AppContainer: React.FC<IAppContainerProps> = (props) => {
  return <div className={`${PREFIX}`}></div>;
};
export default React.memo(AppContainer);