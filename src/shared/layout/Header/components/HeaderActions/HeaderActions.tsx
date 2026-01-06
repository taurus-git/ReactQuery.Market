import React from 'react';
import styles from './HeaderActions.module.scss';
import { AccountButton } from '@features/Account/components/AccountButton/AccountButton';
import { FavoritesButton } from '@features/Favorites/components/FavoritesButton/FavoritesButton';
import { CartButton } from '@features/Cart/components/CartButton/CartButton';
import { SearchButton } from '@features/Search/components/SearchButton/SearchButton';

export const HeaderActions = () => {
  return (
    <div className={`d-flex justify-end flex-wrap ${styles.headerActions}`}>
      <AccountButton className={`${styles.userNavIcon}`} />
      <FavoritesButton className={`${styles.userNavIcon}`} />
      <CartButton />
      <SearchButton className={`${styles.userNavIcon}`} />
    </div>
  );
};
