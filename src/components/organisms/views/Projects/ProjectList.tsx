import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../../../types";
import { fadeInVariants } from "../../../../animations/constants";
import { ProjectCard } from "../../../molecules/ProjectCard";
import styles from "../View.module.css";

interface ProjectListProps {
  projects: Project[];
  onProjectSelect: (projectId: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onProjectSelect,
}) => (
  <motion.div
    key="list"
    className={styles.grid}
    variants={fadeInVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        onClick={() => onProjectSelect(project.id)}
      />
    ))}
  </motion.div>
);
