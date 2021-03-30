import React, { ReactNode, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import modules from '../modules';
import clsx from 'clsx';

export interface IContentProps {
  children?: ReactNode;
}
const useStyles = makeStyles({
  content: {
    height: '100%'
  }
});
const PREFIX = 'Content';
const Content: React.FC<IContentProps> = (props) => {
  const classes = useStyles();
  const routes = useMemo(() => {
    return modules.map(module => <Route key={module.id} >{module.view}</Route>);
  }, []);
  return <div className={clsx(PREFIX, classes.content)}>
    {
      <Switch>
        {
          routes
        }
      </Switch>
    }
  </div>;
};
export default React.memo(Content);