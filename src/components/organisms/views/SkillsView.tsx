import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import { containerVariants, itemVariants, fadeInVariants } from '../../../animations/constants';
import { Tag } from '../../atoms/Tag';
import styles from './View.module.css';

export const SkillsView: React.FC = () => {
  return (
    <motion.div 
      className={styles.viewContainer}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
                        className={styles.skillTag}
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

