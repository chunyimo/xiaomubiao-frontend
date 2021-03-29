import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles({
  resizeBoxItem: {},
});

export interface IResizeBoxItemProps {
  children?: ReactNode;
}
const PREFIX = 'ResizeBoxItem'; 
const ResizeBoxItem: React.FC<IResizeBoxItemProps> = (props) => {
  const classes = useStyles();
  return <div className={clsx(PREFIX,classes.resizeBoxItem)}></div>;
};
export default React.memo(ResizeBoxItem);