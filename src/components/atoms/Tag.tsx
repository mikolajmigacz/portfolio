import React from 'react';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
  icon?: string | null;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ label, icon, className }) => {
  return (
    <span className={`${styles.tag} ${className || ''}`}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      {label}
    </span>
  );
};
