import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../atoms/Button';
import styles from './SectionTemplate.module.css';

interface SectionTemplateProps {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({ title, onBack, children }) => {
  return (
    <motion.div 
      className={styles.container}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <header className={styles.header}>
        <div className={styles.backWrapper}>
            <Button 
                variant="outline" 
                onClick={onBack} 
                icon={<ArrowLeft size={24} />}
                className={styles.backBtn}
            >
                Back
            </Button>
        </div>
        <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            {title}
        </motion.h2>
      </header>
      
      <main className={styles.content}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            {children}
        </motion.div>
      </main>
    </motion.div>
  );
};
