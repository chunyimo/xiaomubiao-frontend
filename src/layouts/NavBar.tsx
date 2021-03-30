import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import modules from '../modules';
import clsx from 'clsx';
import ICTheme from '../interfaces/theme';
export interface INavBarProps {
  children?: ReactNode;
}
const useStyles = makeStyles((theme: ICTheme) => ({
  navBar: {
    backgroundColor: theme.default.firstColor,
    borderRadius: '1.6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.8rem 0',
    flex: '1',
    marginTop: '1rem',
    
  },
  navItem: {
    color: '#9b9b9b',
    width: '3.2rem',
    height: '3.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.4rem',
    '&:hover': {
      color: theme.default.secondColor,
      fontSize: '2.8rem',
    },
  },
  link: {
    display: 'flex',
    width: '1em',
    height: '1em',
    color: 'inherit',
    fontSize: 'inherit',
    '& svg': {
      fontSize: 'inherit',
    }
  }
}));
const PREFIX = 'NavBar';
const NavItem = ({ path, logo }:{path: string, logo: ReactNode}) => {
  const classes = useStyles();
  return <div className={clsx(classes.navItem)}>
    <Link className={clsx(classes.link)} to={path}>{logo}</Link>
  </div> ;
};
const NavBar: React.FC<INavBarProps> = (props) => {
  const classes = useStyles();
  return <div className={clsx(PREFIX, classes.navBar )}>
    {
      modules.map(module => {
        return <NavItem key={module.id} path={module.path} logo={module.logo} />;
      })
    }
  </div>;
};
export default React.memo(NavBar);