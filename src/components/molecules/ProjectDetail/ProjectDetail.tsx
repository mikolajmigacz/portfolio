import React from "react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "../../../types";
import { Button } from "../../atoms/Button";
import { Tag } from "../../atoms/Tag";
import { getTechIcon } from "../../../data/config";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
}) => (
  <div>
    <Button
      variant="outline"
      onClick={onBack}
      icon={<ArrowLeft size={16} />}
      className={styles.backButton}
    >
      Back to Projects
    </Button>

    <div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.techSection}>
        <h4 className={styles.techTitle}>Stack</h4>
        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
          ))}
        </div>
      </div>

      <div className={styles.links}>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" icon={<Github size={18} />}>
              View Code
            </Button>
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" icon={<ExternalLink size={18} />}>
              Live Demo
            </Button>
          </a>
        )}
      </div>
    </div>
  </div>
);
