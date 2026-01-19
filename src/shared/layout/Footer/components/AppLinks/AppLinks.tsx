import React from 'react';
import styles from './AppLinks.module.scss';
import { Image } from '@shared/ui/Image/components/Image/Image';
import appStore from '@assets/images/app-store.png';
import googlePlay from '@assets/images/google-play.png';
import { QrCode } from '../QrCode/QrCode';

export const AppLinks = () => {
  return (
    <div className={`${styles.appLinks}`}>
      <span>Доступ к ранним релизам в приложении</span>
      <Image className={`${styles.appImage}`} src={appStore} />
      <Image className={`${styles.appImage}`} src={googlePlay} />
      <span className={`${styles.qrCode}`}>
        <QrCode />
      </span>
    </div>
  );
};
