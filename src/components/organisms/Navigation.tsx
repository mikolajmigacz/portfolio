import React from 'react';
import { NavItem } from '../molecules/NavItem';
import styles from './Navigation.module.css';

interface NavigationProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeView, onNavigate }) => {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <NavItem
          key={link.id}
          label={link.label}
          isActive={activeView === link.id}
          onClick={() => onNavigate(link.id)}
        />
      ))}
    </nav>
  );
};
