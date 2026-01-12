import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import { ProjectCard } from '../../molecules/ProjectCard';
import { Button } from '../../atoms/Button';
import { Tag } from '../../atoms/Tag';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import styles from './View.module.css';

export const ProjectsView: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedProject = portfolioData.projects.find(p => p.id === selectedId);

    return (
        <div className={styles.viewContainer}>
            <AnimatePresence mode="wait">
                {!selectedId ? (
                    <motion.div 
                        key="list"
                        className={styles.grid}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        {portfolioData.projects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project}
                                onClick={() => setSelectedId(project.id)}
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
                            Back to Projects
                        </Button>

                        {selectedProject && (
                            <div>
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.description}</p>
                                
                                <div style={{ margin: '1.5rem 0' }}>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Stack</h4>
                                    <div className={styles.tagGroup}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {selectedProject.technologies.map(tech => (
                                                <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {selectedProject.repoUrl && (
                                        <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                                             <Button variant="primary" icon={<Github size={18} />}>View Code</Button>
                                        </a>
                                    )}
                                    {selectedProject.liveUrl && (
                                         <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="secondary" icon={<ExternalLink size={18} />}>Live Demo</Button>
                                         </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
