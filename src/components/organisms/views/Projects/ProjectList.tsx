import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../../../types";
import { containerVariants } from "../../../../animations/constants";
import { ProjectCard } from "../../../molecules/ProjectCard";
import styles from "./ProjectList.module.css";

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
    className={styles.list}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, x: -12 }}
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
