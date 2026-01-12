import React from "react";
import { motion } from "framer-motion";
import type { Job } from "../../../../types";
import { fadeInVariants } from "../../../../animations/constants";
import { WorkCard } from "../../../molecules/WorkCard";
import styles from "../View.module.css";

interface WorkListProps {
  jobs: Job[];
  onJobSelect: (jobId: string) => void;
}

export const WorkList: React.FC<WorkListProps> = ({ jobs, onJobSelect }) => (
  <motion.div
    key="list"
    className={styles.list}
    variants={fadeInVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {jobs.map((job) => (
      <WorkCard key={job.id} job={job} onClick={() => onJobSelect(job.id)} />
    ))}
  </motion.div>
);
