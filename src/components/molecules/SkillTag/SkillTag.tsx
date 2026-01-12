import React from "react";
import { motion } from "framer-motion";
import { Tag } from "../../atoms/Tag";
import { getTechIcon } from "../../../data/config";
import { itemVariants } from "../../../animations/constants";
import styles from "./SkillTag.module.css";

interface SkillTagProps {
  skill: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Tag label={skill} icon={getTechIcon(skill)} className={styles.tag} />
  </motion.div>
);
