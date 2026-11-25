import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import styles from "./SectionTemplate.module.css";

interface SectionTemplateProps {
  title: string;
  backLabel: string;
  onBack: () => void;
  children: React.ReactNode;
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({
  title,
  backLabel,
  onBack,
  children,
}) => {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <header className={styles.header}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={onBack}
          aria-label={`Back to ${backLabel}`}
        >
          <ArrowLeft size={18} strokeWidth={2} />
          <span className={styles.backLabel}>{backLabel}</span>
        </button>

        <motion.h2
          className={styles.title}
          key={title}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {title}
        </motion.h2>
      </header>

      <main className={styles.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {children}
        </motion.div>
      </main>
    </motion.div>
  );
};
