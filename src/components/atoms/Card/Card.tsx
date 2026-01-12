import React from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'flat';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  className,
  ...props 
}) => {
  return (
    <motion.div 
      className={`${styles.card} ${styles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
