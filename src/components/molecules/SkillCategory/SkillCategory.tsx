import React from "react";
import { motion } from "framer-motion";
import type { SkillCategory as SkillCategoryType } from "../../../types";
import { itemVariants } from "../../../animations/constants";
import { SkillTag } from "../SkillTag";
import styles from "./SkillCategory.module.css";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => (
  <div className={styles.section}>
    <motion.h3 className={styles.header} variants={itemVariants}>
      {category.category}
    </motion.h3>

    <motion.div className={styles.cloud}>
      {category.items.map((skill) => (
        <SkillTag key={skill} skill={skill} />
      ))}
    </motion.div>
  </div>
);
