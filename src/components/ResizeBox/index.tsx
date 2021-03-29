import React, { ReactNode, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import clsx from 'clsx';
const useStyles = makeStyles({
  resizeBox: {}
});

export interface IResizeBoxProps {
  children?: ReactNode;
}
const items = [
  { subtitle: '1', title: 'A', id: 'A' },
  { subtitle: '1', title: 'B', id: 'B' },
  { subtitle: '1', title: 'C', id: 'C' },
];
const PREFIX = 'ResizeBox'; 
const ResizeBox: React.FC<IResizeBoxProps> = (props) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const classes = useStyles();
  return <div className={clsx(PREFIX, classes.resizeBox)}>
    <AnimateSharedLayout >
      {items.map(item => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={'selectedIdentifier'}>
            <motion.h5>{selectedId}</motion.h5>
            <motion.h2>{'item.title'}</motion.h2>
            <motion.button onClick={() => setSelectedId('')} >Hidden</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  </div>;
};
export default React.memo(ResizeBox);