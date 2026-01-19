import React from 'react';
import styles from './SocialLinks.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

export const SocialLinks = () => {
  return (
    <nav className={`${styles.socialLinks}`}>
      <ul className="social-links">
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Icon name={'twitter'} />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Icon name={'facebook'} />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
            <Icon name={'twitch'} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Icon name={'youtube'} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Icon name={'instagram'} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
