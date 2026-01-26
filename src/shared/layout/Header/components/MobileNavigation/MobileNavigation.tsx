import React from 'react';
import styles from './MobileNavigation.module.scss';
import { City } from '@features/DeliveryRegion/types/cities';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';
import { MobileMenu } from '@shared/layout/Header/components/MobileMenu/MobileMenu';
import { CityButton } from '@features/DeliveryRegion/components/CityButton/CityButton';
import { InfoLinks } from '@shared/ui/InfoLinks/InfoLinks';
import { Link } from 'react-router-dom';
import { useCategories } from '@features/Products/hooks/useCategories';
import { QueryState } from '@shared/ui/QueryState';

interface MobileNavigationProps {
  closeMenu: () => void;
  toggleOpen: () => void;
  city: City;
}

export const MobileNavigation = ({ closeMenu, toggleOpen, city }: MobileNavigationProps) => {
  const { data, isLoading, isError } = useCategories();

  return (
    <div
      className={`h-screen position-fixed w-75 d-flex flex-column justify-between ${styles.menu}`}
    >
      <CloseButton onClose={closeMenu} className={`position-absolute close`} />
      <div className={'navigation'}>
        <QueryState isLoading={isLoading} isError={isError}>
          {data && <MobileMenu data={data} onClose={closeMenu} />}
        </QueryState>
      </div>

      <div className={`d-flex flex-column justify-center align-center ${styles.linksWrapper}`}>
        <div className={`w-100 d-flex flex-column justify-center align-center ${styles.actions}`}>
          <Link to="/">Личный кабинет</Link>
          <button className="btn btn--size-md btn--font-md btn--dark">Войти</button>
          <button className="btn btn--size-md btn--font-md btn--light">Зарегистрироваться</button>
        </div>
        <div className={`d-flex flex-column justify-center align-center ${styles.links}`}>
          <CityButton city={city} toggleOpen={toggleOpen} variant={'mobile'} />
          <InfoLinks />
        </div>
      </div>
    </div>
  );
};
