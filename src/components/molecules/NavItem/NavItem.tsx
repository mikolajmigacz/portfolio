import React from 'react';
import { motion } from 'framer-motion';
import styles from './NavItem.module.css';

interface NavItemProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ label, onClick, isActive }) => {
  return (
    <motion.button
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};
