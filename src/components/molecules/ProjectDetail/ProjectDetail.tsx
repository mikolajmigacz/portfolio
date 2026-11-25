import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../../../types";
import { Button } from "../../atoms/Button";
import { Tag } from "../../atoms/Tag";
import { getTechIcon } from "../../../data/config";
import { containerVariants, itemVariants } from "../../../animations/constants";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

const getInitials = (title: string) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => (
  <motion.div
    className={styles.detail}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.header className={styles.hero} variants={itemVariants}>
      <div className={styles.mark} aria-hidden>
        {getInitials(project.title) || "P"}
      </div>

      <div className={styles.heroText}>
        <div className={styles.metaRow}>
          <span className={styles.label}>Project</span>
          {project.status && (
            <span className={styles.badge}>{project.status}</span>
          )}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>

        {(project.repoUrl || project.liveUrl) && (
          <div className={styles.links}>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" icon={<Github size={18} />}>
                  View code
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" icon={<ExternalLink size={18} />}>
                  Live demo
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.header>

    <motion.section className={styles.section} variants={itemVariants}>
      <h4 className={styles.sectionTitle}>Highlights</h4>
      <ul className={styles.highlights}>
        {project.highlights.map((item) => (
          <li key={item} className={styles.highlight}>
            <span className={styles.bullet} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.section>

    <motion.section className={styles.section} variants={itemVariants}>
      <h4 className={styles.sectionTitle}>Stack</h4>
      <div className={styles.tags}>
        {project.technologies.map((tech) => (
          <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
        ))}
      </div>
    </motion.section>
  </motion.div>
);
