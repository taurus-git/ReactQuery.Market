import React from 'react';
import styles from './HeaderActions.module.scss';
import { AccountButton } from '@features/Account/components/AccountButton/AccountButton';
import { FavoritesButton } from '@features/Favorites/components/FavoritesButton/FavoritesButton';
import { CartButton } from '@features/Cart/components/CartButton/CartButton';
import { SearchButton } from '@features/Search/components/SearchButton/SearchButton';

export const HeaderActions = () => {
  return (
    <div className={`d-flex justify-end flex-wrap ${styles.headerActions}`}>
      <AccountButton
        className={`d-none flex-column align-center ${styles.userNavIcon} ${styles.account}`}
      >
        <span className={styles.label}>Войти</span>
      </AccountButton>
      <FavoritesButton
        className={`d-none flex-column align-center ${styles.userNavIcon} ${styles.favorites}`}
      >
        <span className={styles.label}>Избранное</span>
      </FavoritesButton>
      <CartButton
        className={`d-flex flex-column align-center ${styles.userNavIcon} ${styles.cart}`}
      >
        <span className={styles.label}>Корзина</span>
      </CartButton>
      <SearchButton
        className={`d-none flex-column align-center ${styles.userNavIcon} ${styles.search}`}
      >
        <span className={styles.label}>Поиск</span>
      </SearchButton>
    </div>
  );
};
