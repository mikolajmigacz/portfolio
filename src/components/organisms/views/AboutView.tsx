import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import styles from './View.module.css'; // Shared styles for views

// Helper to replace keywords with icons
const BioWithIcons = ({ text }: { text: string }) => {
  const keywords = ['TypeScript', 'React', 'Node.js', 'CompTIA Security+'];
  
  const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'g'));
  
  return (
    <span>
      {parts.map((part, i) => {
        if (keywords.includes(part)) {
           const icon = getTechIcon(part === 'Node.js' ? 'Node.js' : part); // specific mapping if needed
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
             {/* Education */}
             <motion.div variants={itemVariants} className={styles.infoSection}>
                <h3 className={styles.categoryHeader}>Education</h3>
                <div className={styles.infoList}>
                    {portfolioData.education?.map((edu, idx) => (
                        <div key={idx} className={styles.infoItemWithLogo}>
                            {edu.logo && (
                                <img src={edu.logo} alt={edu.school} className={styles.schoolLogo} />
                            )}
                            <div>
                                <h4 className={styles.infoTitle}>{edu.school}</h4>
                                <p className={styles.infoSubtitle}>{edu.degree}</p>
                                <span className={styles.infoDate}>{edu.startDate} - {edu.endDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
             </motion.div>

             {/* Certifications & Languages */}
             <div className={styles.columnStack}>
                <motion.div variants={itemVariants} className={styles.infoSection}>
                    <h3 className={styles.categoryHeader}>Certifications</h3>
                    <div className={styles.infoList}>
                        {portfolioData.certifications?.map((cert, idx) => (
                            <div key={idx} className={styles.infoItemWithLogo}>
                                {cert.logo && (
                                    <img src={cert.logo} alt={cert.issuer} className={styles.schoolLogo} />
                                )}
                                <div>
                                    <h4 className={styles.infoTitle}>{cert.name}</h4>
                                    <p className={styles.infoSubtitle}>{cert.issuer}</p>
                                    {cert.id && <span className={styles.infoMeta}>ID: {cert.id}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
             </div>
        </div>

        {/* Interests */}
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
  }
};
