import React from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../../../types";
import { getTechIcon } from "../../../data/config";
import { Tag } from "../../atoms/Tag";
import { itemVariants } from "../../../animations/constants";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const getInitials = (title: string) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => (
  <motion.article className={styles.card} variants={itemVariants}>
    <button type="button" className={styles.main} onClick={onClick}>
      <div className={styles.mark} aria-hidden>
        {getInitials(project.title) || "P"}
      </div>

      <div className={styles.body}>
        <div className={styles.topRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.status && (
            <span className={styles.badge}>{project.status}</span>
          )}
        </div>

        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.tags}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
          ))}
        </div>
      </div>

      <span className={styles.action} aria-hidden>
        <ArrowUpRight size={18} />
      </span>
    </button>

    {(project.repoUrl || project.liveUrl) && (
      <div className={styles.links}>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(event) => event.stopPropagation()}
          >
            <Github size={15} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(event) => event.stopPropagation()}
          >
            <ExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    )}
  </motion.article>
);
