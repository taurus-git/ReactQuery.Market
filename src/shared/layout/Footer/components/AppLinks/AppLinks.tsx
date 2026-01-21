import React from 'react';
import styles from './AppLinks.module.scss';
import { Image } from '@shared/ui/Image/components/Image/Image';
import appStore from '@assets/images/app-store.png';
import googlePlay from '@assets/images/google-play.png';
import { QrCode } from '../QrCode/QrCode';

export const AppLinks = () => {
  return (
    <div className={`d-grid ${styles.appLinks}`}>
      <span className={`${styles.appHeader}`}>Доступ к ранним релизам в приложении</span>
      <button className={`${styles.appButton}`}>
        <Image className={`${styles.appImage}`} src={appStore} />
      </button>
      <button className={`${styles.appButton}`}>
        <Image className={`${styles.appImage}`} src={googlePlay} />
      </button>
      <span className={`${styles.qrCode}`}>
        <QrCode />
      </span>
    </div>
  );
};
