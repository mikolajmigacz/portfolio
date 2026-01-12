import React from 'react';

import styles from '../organisms/views/View.module.css';
import { getTechIcon } from '../../data/config';

interface BioWithIconsProps {
  text: string;
}

const TECH_KEYWORDS = ['TypeScript', 'React', 'Node.js', 'CompTIA Security+'];

export const BioWithIcons: React.FC<BioWithIconsProps> = ({ text }) => {
  const parts = text.split(new RegExp(`(${TECH_KEYWORDS.join('|')})`, 'g'));
  
  return (
    <span>
      {parts.map((part, i) => {
        if (TECH_KEYWORDS.includes(part)) {
           const icon = getTechIcon(part);
           return (
             <span key={i} className={styles.inlineTag}>
                {icon && <img src={icon} alt="" className={styles.inlineIcon} />}
                {part}
             </span>
           );
        }
        return part;
      })}
    </span>
  );
};
