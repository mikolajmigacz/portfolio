import React from "react";
import { motion } from "framer-motion";
import type { Job } from "../../../../types";
import { containerVariants } from "../../../../animations/constants";
import { WorkCard } from "../../../molecules/WorkCard";
import styles from "./WorkList.module.css";

interface WorkListProps {
  jobs: Job[];
  onJobSelect: (jobId: string) => void;
}

export const WorkList: React.FC<WorkListProps> = ({ jobs, onJobSelect }) => (
  <motion.div
    key="list"
    className={styles.timeline}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, x: -12 }}
  >
    {jobs.map((job, index) => (
      <div key={job.id} className={styles.item}>
        <div className={styles.rail} aria-hidden>
          <span className={styles.dot} />
          {index < jobs.length - 1 && <span className={styles.line} />}
        </div>
        <WorkCard job={job} onClick={() => onJobSelect(job.id)} />
      </div>
    ))}
  </motion.div>
);
