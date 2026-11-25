import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { portfolioData } from "../../../../data/config";
import { fadeInVariants } from "../../../../animations/constants";
import { ProjectDetail } from "../../../molecules/ProjectDetail";
import { useProjectSelection } from "./useProjectSelection";
import { ProjectList } from "./ProjectList";
import styles from "../View.module.css";

interface ProjectsViewProps {
  onDetailChange?: (
    detail: {
      title: string;
      parentLabel: string;
      clear: () => void;
    } | null,
  ) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onDetailChange,
}) => {
  const { selectedProject, selectProject, clearSelection, hasSelection } =
    useProjectSelection(portfolioData.projects);

  useEffect(() => {
    if (selectedProject) {
      onDetailChange?.({
        title: selectedProject.title,
        parentLabel: "Projects",
        clear: clearSelection,
      });
    } else {
      onDetailChange?.(null);
    }
  }, [selectedProject, clearSelection, onDetailChange]);

  useEffect(() => {
    return () => onDetailChange?.(null);
  }, [onDetailChange]);

  return (
    <div className={styles.viewContainer}>
      <AnimatePresence mode="wait">
        {!hasSelection ? (
          <ProjectList
            projects={portfolioData.projects}
            onProjectSelect={selectProject}
          />
        ) : (
          selectedProject && (
            <motion.div
              key="detail"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ProjectDetail project={selectedProject} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};
