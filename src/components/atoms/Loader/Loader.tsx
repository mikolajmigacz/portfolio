import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

export const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.text}
      >
        Loading...
      </motion.p>
    </div>
  );
};
