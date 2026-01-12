import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../../../data/config";
import {
  containerVariants,
  fadeInVariants,
} from "../../../../animations/constants";
import { SkillCategory } from "../../../molecules/SkillCategory";
import styles from "../View.module.css";

export const SkillsView: React.FC = () => (
  <motion.div
    className={styles.viewContainer}
    variants={fadeInVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.4 }}
  >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.skillsContainer}
    >
      {portfolioData.skills.map((category) => (
        <SkillCategory key={category.category} category={category} />
      ))}
    </motion.div>
  </motion.div>
);
