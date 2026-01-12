import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { portfolioData } from "../../../../data/config";
import { fadeInVariants } from "../../../../animations/constants";
import { ProjectDetail } from "../../../molecules/ProjectDetail";
import { useProjectSelection } from "./useProjectSelection";
import { ProjectList } from "./ProjectList";
import styles from "../View.module.css";

export const ProjectsView: React.FC = () => {
  const { selectedProject, selectProject, clearSelection, hasSelection } =
    useProjectSelection(portfolioData.projects);

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
              <ProjectDetail
                project={selectedProject}
                onBack={clearSelection}
              />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};
