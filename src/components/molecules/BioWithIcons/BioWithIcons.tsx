import React from "react";

import styles from "../../organisms/views/View.module.css";
import { getTechIcon } from "../../../data/config";

interface BioWithIconsProps {
  text: string;
}

const TECH_KEYWORDS = ["TypeScript", "React", "Node.js", "AWS"];

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const BioWithIcons: React.FC<BioWithIconsProps> = ({ text }) => {
  const pattern = TECH_KEYWORDS.map(escapeRegExp).join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "g"));

  return (
    <span>
      {parts.map((part, i) => {
        if (TECH_KEYWORDS.includes(part)) {
          const icon = getTechIcon(part);
          return (
            <span key={i} className={styles.inlineTag}>
              {icon && <img src={icon} alt="" className={styles.inlineIcon} />}
              {part}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
};
