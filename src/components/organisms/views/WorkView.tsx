import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import { JobCard } from '../../molecules/JobCard';
import { Button } from '../../atoms/Button';
import { Tag } from '../../atoms/Tag';
import { ArrowLeft } from 'lucide-react';
import styles from './View.module.css';

export const WorkView: React.FC = () => {
  // ... state ...
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedJob = portfolioData.experience.find(j => j.id === selectedId);

  return (
    <div className={styles.viewContainer}>
      {/* ... header ... */}
      <AnimatePresence mode="wait">
        {!selectedId ? (
          <motion.div 
            key="list"
            className={styles.list} // Keeping list class for vertical stacking of jobs
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    {selectedJob.logo && (
                        <img 
                            src={selectedJob.logo} 
                            alt={selectedJob.company} 
                            style={{ 
                                width: '64px', 
                                height: '64px', 
                                borderRadius: '12px',
                                objectFit: 'contain',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '8px'
                            }} 
                        />
                    )}
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{selectedJob.role}</h3>
                        <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{selectedJob.company}</span>
                    </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    {selectedJob.startDate} - {selectedJob.endDate}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ lineHeight: '1.6' }}>{selectedJob.description}</p>
                </div>

                <div style={{ margin: '1.5rem 0' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Technologies</h4>
                    <div className={styles.tagGroup}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
