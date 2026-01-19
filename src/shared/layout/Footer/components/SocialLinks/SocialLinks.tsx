import React from 'react';
import styles from './SocialLinks.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';
import { footerLinks } from '@shared/layout/Footer/config/footerLinks';

export const SocialLinks = () => {
  return (
    <nav className={`${styles.socialLinksNav}`}>
      <ul className={`p-10 ${styles.socialLinks}`}>
        {footerLinks.social.map(({ id, label, href }) => (
          <li key={id}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={21} name={label} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
