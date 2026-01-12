import React from 'react';
import { AnimatePresence } from 'framer-motion';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ sidebar, content }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {sidebar}
      </aside>
      
      <main className={styles.main}>
        <div className={styles.contentWindow}>
           <AnimatePresence mode="wait">
             {content}
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
