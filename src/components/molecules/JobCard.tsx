import React from 'react';

import { Card } from '../atoms/Card';
import { Tag } from '../atoms/Tag';
import type { Job } from '../../types';
import { getTechIcon } from '../../data/config';
import styles from './JobCard.module.css';

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <Card 
      className={styles.jobCard} 
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <h3 className={styles.role}>{job.role}</h3>
             {job.logo && (
                <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '8px', /* Rounded square for modern feel */
                        objectFit: 'contain',
                        backgroundColor: 'rgba(255,255,255,0.05)', /* Subtle bg for transparent logos */
                        padding: '4px'
                    }} 
                />
            )}
        </div>
        <span className={styles.company}>{job.company}</span>
      </div>
      <div className={styles.meta}>
        <span className={styles.date}>{job.startDate} - {job.endDate}</span>
      </div>
      
      {/* Short description preview */}
      <p className={styles.description}>{job.description.substring(0, 100)}...</p>

      <div className={styles.tags}>
        {job.technologies.slice(0, 3).map((tech) => (
          <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
        ))}
      </div>
    </Card>
  );
};
