import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLogo.module.scss';
import { Image } from '@shared/ui/Image/components/Image/Image';
import logoBlack from '@assets/images/logo--black.png';

export const HeaderLogo = () => {
  return (
    <div className={`${styles.headerLogo}`}>
      <Link to={'/'}>
        <Image className={`${styles.logo}`} src={logoBlack} alt={'logo'} />
      </Link>
    </div>
  );
};
