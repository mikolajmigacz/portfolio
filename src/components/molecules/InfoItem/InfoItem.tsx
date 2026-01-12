import React from "react";
import styles from "../../organisms/views/View.module.css";

interface InfoItemProps {
  logo?: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  meta?: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  logo,
  logoAlt,
  title,
  subtitle,
  meta,
}) => {
  return (
    <div className={styles.infoItemWithLogo}>
      {logo && <img src={logo} alt={logoAlt} className={styles.schoolLogo} />}
      <div>
        <h4 className={styles.infoTitle}>{title}</h4>
        <p className={styles.infoSubtitle}>{subtitle}</p>
        {meta && <span className={styles.infoMeta}>{meta}</span>}
      </div>
    </div>
  );
};
