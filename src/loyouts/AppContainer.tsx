import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ICTheme from '../interfaces/theme';
import clsx from 'clsx';
import Logo from './Logo';
import Content from './Content';
export interface IAppContainerProps {
  children?: ReactNode;
}
const useStyles = makeStyles((theme: ICTheme) => ({
  appContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    padding: '2.4rem 4.8rem'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 3.2rem',
  },
  right: {
    flex: '1',
    marginLeft: '2.4rem',
    
  }
}));
const PREFIX = 'AppContainer';
const AppContainer: React.FC<IAppContainerProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={clsx(PREFIX,classes.appContainer)}>
      <div
        className={clsx(PREFIX, classes.left)}>
        <Logo />
        <NavBar/>
      </div>
      <div className={clsx(PREFIX, classes.right)}>
        <Content />
      </div>
    </div>
  );
};
export default React.memo(AppContainer);