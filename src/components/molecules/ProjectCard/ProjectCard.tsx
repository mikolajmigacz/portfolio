import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "../../atoms/Card";
import { Tag } from "../../atoms/Tag";
import { Button } from "../../atoms/Button";
import type { Project } from "../../../types";
import { getTechIcon } from "../../../data/config";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => (
  <Card className={styles.card} onClick={onClick} whileHover={{ y: -5 }}>
    <div className={styles.header}>
      <h3 className={styles.title}>{project.title}</h3>
    </div>

    <p className={styles.description}>{project.description}</p>

    <div className={styles.tags}>
      {project.technologies.slice(0, 3).map((tech) => (
        <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
      ))}
    </div>

    <div className={styles.actions}>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" icon={<Github size={16} />}>
            Code
          </Button>
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" icon={<ExternalLink size={16} />}>
            Live
          </Button>
        </a>
      )}
    </div>
  </Card>
);
