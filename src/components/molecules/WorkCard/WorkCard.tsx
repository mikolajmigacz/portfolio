import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Job } from "../../../types";
import { getTechIcon } from "../../../data/config";
import { Tag } from "../../atoms/Tag";
import { itemVariants } from "../../../animations/constants";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  job: Job;
  onClick: () => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ job, onClick }) => {
  const isCurrent = job.endDate.toLowerCase() === "present";

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={onClick}
      variants={itemVariants}
    >
      <div className={styles.logoWrap}>
        {job.logo ? (
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className={styles.logo}
          />
        ) : (
          <span className={styles.logoFallback}>
            {job.company.slice(0, 1)}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.topRow}>
          <div className={styles.identity}>
            <span className={styles.company}>{job.company}</span>
            {isCurrent && <span className={styles.badge}>Present</span>}
          </div>
          <span className={styles.date}>
            {job.startDate} - {job.endDate}
          </span>
        </div>

        <h3 className={styles.role}>{job.role}</h3>
        <p className={styles.summary}>{job.summary}</p>

        <div className={styles.tags}>
          {job.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
          ))}
        </div>
      </div>

      <span className={styles.action} aria-hidden>
        <ArrowUpRight size={18} />
      </span>
    </motion.button>
  );
};
