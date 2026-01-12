import React from "react";
import { ArrowLeft } from "lucide-react";
import type { Job } from "../../../types";
import { Button } from "../../atoms/Button";
import { Tag } from "../../atoms/Tag";
import { getTechIcon } from "../../../data/config";
import styles from "./WorkDetail.module.css";

interface WorkDetailProps {
  job: Job;
  onBack: () => void;
}

export const WorkDetail: React.FC<WorkDetailProps> = ({ job, onBack }) => (
  <div>
    <Button
      variant="outline"
      onClick={onBack}
      icon={<ArrowLeft size={16} />}
      className={styles.backButton}
    >
      Back to List
    </Button>

    <div>
      <div className={styles.header}>
        {job.logo && (
          <img src={job.logo} alt={job.company} className={styles.logo} />
        )}
        <div>
          <h3 className={styles.title}>{job.role}</h3>
          <span className={styles.subtitle}>{job.company}</span>
        </div>
      </div>

      <p className={styles.date}>
        {job.startDate} - {job.endDate}
      </p>

      <div className={styles.description}>
        <p>{job.description}</p>
      </div>

      <div className={styles.techSection}>
        <h4 className={styles.techTitle}>Technologies</h4>
        <div className={styles.tags}>
          {job.technologies.map((tech) => (
            <Tag key={tech} label={tech} icon={getTechIcon(tech)} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
