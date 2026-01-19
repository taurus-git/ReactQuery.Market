import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterLogo.module.scss';
import { Image } from '@shared/ui/Image/components/Image/Image';
import logoWhite from '@assets/images/logo--white.png';

export const FooterLogo = () => {
  return (
    <Link className={`${styles.logo}`} to={'/'}>
      <Image src={logoWhite} className={'w-auto'} />
    </Link>
  );
};
