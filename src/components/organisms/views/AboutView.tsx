import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/config';
import { containerVariants, itemVariants } from '../../../animations/constants';
import { BioWithIcons } from '../../molecules/BioWithIcons';
import { InfoItem } from '../../molecules/InfoItem';
import styles from './View.module.css';

export const AboutView: React.FC = () => {
  return (
    <motion.div 
      className={styles.aboutContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className={styles.bioSection}>
        <p className={styles.text}>
          <BioWithIcons text={portfolioData.profile.longBio} />
        </p>
      </motion.div>

      <div className={styles.gridTwoColumn}>
        <motion.div variants={itemVariants} className={styles.infoSection}>
          <h3 className={styles.categoryHeader}>Education</h3>
          <div className={styles.infoList}>
            {portfolioData.education?.map((edu, idx) => (
              <InfoItem
                key={idx}
                logo={edu.logo}
                logoAlt={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                meta={`${edu.startDate} - ${edu.endDate}`}
              />
            ))}
          </div>
        </motion.div>

        <div className={styles.columnStack}>
          <motion.div variants={itemVariants} className={styles.infoSection}>
            <h3 className={styles.categoryHeader}>Certifications</h3>
            <div className={styles.infoList}>
              {portfolioData.certifications?.map((cert, idx) => (
                <InfoItem
                  key={idx}
                  logo={cert.logo}
                  logoAlt={cert.issuer}
                  title={cert.name}
                  subtitle={cert.issuer}
                  meta={cert.id ? `ID: ${cert.id}` : undefined}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div variants={itemVariants} className={styles.infoSection}>
        <h3 className={styles.categoryHeader}>Beyond Code</h3>
        <div className={styles.interestCloud}>
          {portfolioData.profile.interests?.map((interest) => (
            <span key={interest} className={styles.interestTag}>
              {interest}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
