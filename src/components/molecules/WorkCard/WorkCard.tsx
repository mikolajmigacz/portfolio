import React from "react";
import { Card } from "../../atoms/Card";
import { Tag } from "../../atoms/Tag";
import type { Job } from "../../../types";
import { getTechIcon } from "../../../data/config";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  job: Job;
  onClick: () => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ job, onClick }) => (
  <Card className={styles.card} onClick={onClick} whileHover={{ scale: 1.02 }}>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h3 className={styles.role}>{job.role}</h3>
        {job.logo && (
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className={styles.logo}
          />
        )}
      </div>
      <span className={styles.company}>{job.company}</span>
    </div>

    <span className={styles.date}>
      {job.startDate} - {job.endDate}
    </span>

    <p className={styles.description}>{job.description.substring(0, 100)}...</p>

    <div className={styles.tags}>
      {job.technologies.slice(0, 3).map((tech) => (
        <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
      ))}
    </div>
  </Card>
);
