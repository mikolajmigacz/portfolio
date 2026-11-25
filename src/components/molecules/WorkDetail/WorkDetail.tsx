import React from "react";
import { motion } from "framer-motion";
import type { Job } from "../../../types";
import { Tag } from "../../atoms/Tag";
import { getTechIcon } from "../../../data/config";
import { containerVariants, itemVariants } from "../../../animations/constants";
import styles from "./WorkDetail.module.css";

interface WorkDetailProps {
  job: Job;
}

export const WorkDetail: React.FC<WorkDetailProps> = ({ job }) => {
  const isCurrent = job.endDate.toLowerCase() === "present";

  return (
    <motion.div
      className={styles.detail}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className={styles.hero} variants={itemVariants}>
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

        <div className={styles.heroText}>
          <div className={styles.metaRow}>
            <span className={styles.company}>{job.company}</span>
            {isCurrent && <span className={styles.badge}>Present</span>}
          </div>
          <h3 className={styles.title}>{job.role}</h3>
          <p className={styles.date}>
            {job.startDate} - {job.endDate}
          </p>
          <p className={styles.summary}>{job.summary}</p>
        </div>
      </motion.header>

      <motion.section className={styles.section} variants={itemVariants}>
        <h4 className={styles.sectionTitle}>Highlights</h4>
        <ul className={styles.highlights}>
          {job.highlights.map((item) => (
            <li key={item} className={styles.highlight}>
              <span className={styles.bullet} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h4 className={styles.sectionTitle}>Stack</h4>
        <div className={styles.tags}>
          {job.technologies.map((tech) => (
            <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};
