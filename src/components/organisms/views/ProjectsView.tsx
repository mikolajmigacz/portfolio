import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, getTechIcon } from '../../../data/config';
import { fadeInVariants } from '../../../animations/constants';
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
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
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
                            Back to Projects
                        </Button>

                        {selectedProject && (
                            <div>
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.description}</p>
                                
                                <div className={styles.detailTechSection}>
                                    <h4 className={styles.detailTechTitle}>Stack</h4>
                                    <div className={styles.tagGroup}>
                                        <div className={styles.tagList}>
                                            {selectedProject.technologies.map(tech => (
                                                <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.detailLinks}>
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

