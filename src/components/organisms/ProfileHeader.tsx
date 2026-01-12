import React from 'react';
import { motion } from 'framer-motion';
import type { UserProfile } from '../../types';
import styles from './ProfileHeader.module.css';
import { Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '../atoms/Button';

interface ProfileHeaderProps {
  profile: UserProfile;
  variant?: 'hero' | 'footer';
  children?: React.ReactNode;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, variant = 'hero', children }) => {
  const isFooter = variant === 'footer';

  return (
    <motion.header 
      className={`${styles.header} ${isFooter ? styles.footer : styles.hero}`}
      layout
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div className={styles.container} layout>
        <motion.div className={styles.mainInfo} layout>
            <motion.h1 
            className={styles.name} 
            layout="position"
            style={{ fontSize: isFooter ? '1.5rem' : 'var(--font-size-name)' }}
            >
            {profile.name}
            </motion.h1>
            
            {!isFooter && (
                <motion.h2 
                className={styles.title} 
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ fontSize: 'var(--font-size-title)' }}
                >
                {profile.title}
                </motion.h2>
            )}
            {isFooter && (
                 <motion.span 
                 className={styles.title} 
                 layout="position"
                 style={{ fontSize: '1rem' }}
                 >
                 {profile.title}
                 </motion.span>
            )}
        </motion.div>

        <motion.div 
            className={styles.details} 
            layout
            style={{ flexDirection: isFooter ? 'row' : 'column', gap: isFooter ? '2rem' : '0.5rem' }}
        >
            <p className={styles.detailText}>{profile.location}</p>
            <a href={`mailto:${profile.socials.email}`} className={styles.detailText}>
                {profile.socials.email}
            </a>
        </motion.div>
            
        <motion.div 
            className={styles.socials} 
            layout
        >
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" icon={<Github size={isFooter ? 16 : 20} />} aria-label="GitHub" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" icon={<Linkedin size={isFooter ? 16 : 20} />} aria-label="LinkedIn" />
            </a>
            <a href={profile.socials.cv} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" icon={<FileText size={isFooter ? 16 : 20} />} aria-label="CV" />
            </a>
        </motion.div>

        {!isFooter && children && (
            <motion.div layout className={styles.navSlot}>
                {children}
            </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
};

