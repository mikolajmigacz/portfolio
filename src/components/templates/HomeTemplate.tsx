import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeTemplate.module.css';
import { BackgroundAnimation } from '../atoms/BackgroundAnimation';

export const HomeTemplate: React.FC = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundAnimation />
    </motion.div>
  );
};
