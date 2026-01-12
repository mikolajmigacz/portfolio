import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { portfolioData } from "../../../../data/config";
import { fadeInVariants } from "../../../../animations/constants";
import { WorkDetail } from "../../../molecules/WorkDetail";
import { useWorkSelection } from "./useWorkSelection";
import { WorkList } from "./WorkList";
import styles from "../View.module.css";

export const WorkView: React.FC = () => {
  const { selectedJob, selectJob, clearSelection, hasSelection } =
    useWorkSelection(portfolioData.experience);

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
              <WorkDetail job={selectedJob} onBack={clearSelection} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};
