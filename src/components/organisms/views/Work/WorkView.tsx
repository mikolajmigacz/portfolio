import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { portfolioData } from "../../../../data/config";
import { fadeInVariants } from "../../../../animations/constants";
import { WorkDetail } from "../../../molecules/WorkDetail";
import { useWorkSelection } from "./useWorkSelection";
import { WorkList } from "./WorkList";
import styles from "../View.module.css";

interface WorkViewProps {
  onDetailChange?: (
    detail: {
      title: string;
      parentLabel: string;
      clear: () => void;
    } | null,
  ) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onDetailChange }) => {
  const { selectedJob, selectJob, clearSelection, hasSelection } =
    useWorkSelection(portfolioData.experience);

  useEffect(() => {
    if (selectedJob) {
      onDetailChange?.({
        title: selectedJob.role,
        parentLabel: "Work",
        clear: clearSelection,
      });
    } else {
      onDetailChange?.(null);
    }
  }, [selectedJob, clearSelection, onDetailChange]);

  useEffect(() => {
    return () => onDetailChange?.(null);
  }, [onDetailChange]);

  return (
    <div className={styles.viewContainer}>
      <AnimatePresence mode="wait">
        {!hasSelection ? (
          <WorkList jobs={portfolioData.experience} onJobSelect={selectJob} />
        ) : (
          selectedJob && (
            <motion.div
              key="detail"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <WorkDetail job={selectedJob} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};
