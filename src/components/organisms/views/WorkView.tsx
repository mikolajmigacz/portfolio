import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import { fadeInVariants } from '../../../animations/constants';
import { JobCard } from '../../molecules/JobCard';
import { Button } from '../../atoms/Button';
import { Tag } from '../../atoms/Tag';
import { ArrowLeft } from 'lucide-react';
import styles from './View.module.css';

export const WorkView: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedJob = portfolioData.experience.find(j => j.id === selectedId);

  return (
    <div className={styles.viewContainer}>
      <AnimatePresence mode="wait">
        {!selectedId ? (
          <motion.div 
            key="list"
            className={styles.list}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {portfolioData.experience.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onClick={() => setSelectedId(job.id)} 
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Button 
              variant="outline" 
              onClick={() => setSelectedId(null)}
              icon={<ArrowLeft size={16} />}
              className={styles.backButton}
            >
              Back to List
            </Button>
            
            {selectedJob && (
              <div>
                <div className={styles.detailHeader}>
                    {selectedJob.logo && (
                        <img 
                            src={selectedJob.logo} 
                            alt={selectedJob.company} 
                            className={styles.detailLogo}
                        />
                    )}
                    <div>
                        <h3 className={styles.detailTitle}>{selectedJob.role}</h3>
                        <span className={styles.detailSubtitle}>{selectedJob.company}</span>
                    </div>
                </div>

                <p className={styles.detailDate}>
                    {selectedJob.startDate} - {selectedJob.endDate}
                </p>
                
                <div className={styles.detailDescription}>
                    <p>{selectedJob.description}</p>
                </div>

                <div className={styles.detailTechSection}>
                    <h4 className={styles.detailTechTitle}>Technologies</h4>
                    <div className={styles.tagGroup}>
                        <div className={styles.tagList}>
                            {selectedJob.technologies.map(tech => (
                                <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

