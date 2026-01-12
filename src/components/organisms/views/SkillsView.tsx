import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import { Tag } from '../../atoms/Tag';
import styles from './View.module.css';

export const SkillsView: React.FC = () => {
  return (
    <motion.div 
      className={styles.viewContainer}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.skillsContainer}
      >
        {portfolioData.skills.map((category) => (
          <div key={category.category} className={styles.skillSection}>
            <motion.h3 
                className={styles.categoryHeader}
                variants={itemVariants}
            >
                {category.category}
            </motion.h3>
            
            <motion.div className={styles.skillCloud}>
              {category.items.map((skill) => (
                <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Tag 
                        label={skill} 
                        icon={getTechIcon(skill)} 
                        className={styles.skillTag} // Need to add this class or just rely on Tag style
                    />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
  }
};
