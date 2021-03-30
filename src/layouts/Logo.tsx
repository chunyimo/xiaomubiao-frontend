import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ICTheme from '../interfaces/theme';
export interface ILogoProps {
  children?: ReactNode;
}
const useStyles = makeStyles((theme: ICTheme) => ({
  logo: {
    backgroundColor: theme.default.firstColor,
    width: '3.2rem',
    height: '3.2rem',
    borderRadius: '1.6rem',
    flex: '0 0 3.2rem'
  }
}));
const PREFIX = 'Logo'; 
const Logo: React.FC<ILogoProps> = (props) => {
  const classes = useStyles();
  return <div className={clsx(PREFIX, classes.logo)}></div>; 
};
export default React.memo(Logo);
