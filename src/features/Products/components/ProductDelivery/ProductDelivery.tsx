import React from 'react';
import styles from './ProductDelivery.module.scss';
import { CityButton } from '@features/DeliveryRegion/components/CityButton/CityButton';
import { useCitySelectorState } from '@features/DeliveryRegion/hooks/useCitySelectorState';
import { Popup } from '@shared/ui/Popup/Popup';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';
import { CityList } from '@features/DeliveryRegion/components/CityList/CityList';
import { Overlay } from '@shared/ui/Overlay/Overlay';
import { DeliveryItem } from '@features/Products/components/DeliveryItem/DeliveryItem';
import { Link } from 'react-router-dom';

interface ProductDeliveryProps {
  className?: string;
}

export const ProductDelivery = ({ className }: ProductDeliveryProps) => {
  const { city, isOpen, close, toggle, handleSelectCity } = useCitySelectorState();

  return (
    <section className={`${className}`}>
      <div className={`${styles.deliveryCity}`}>
        {isOpen && (
          <>
            <Overlay onClose={close} />
            <Popup>
              <CloseButton className={`position-absolute close`} onClose={close} />
              <CityList city={city} onSelectCity={handleSelectCity} />
            </Popup>
          </>
        )}
        <CityButton city={city} toggleOpen={toggle} variant={'mobile'} />
      </div>
      <div className={`${styles.deliveryContainer} d-flex flex-column`}>
        <DeliveryItem icon={'car'} time={'Сегодня'} priceFree={true} priceCrossed={500}>
          <p>Курьером по вашему адресу</p>
        </DeliveryItem>
        <DeliveryItem icon={'home_1'} time={'Сегодня'} price={500}>
          <p>
            Забрать в одном из{' '}
            <Link to={'/'} className={`${styles.underline} position-relative`}>
              9 магазинов
            </Link>
          </p>
        </DeliveryItem>
        <DeliveryItem icon={'home_2'} time={'20 апреля'} priceFree={true}>
          <p>
            Заказать доставку в один из{' '}
            <Link to={'/'} className={`${styles.underline} position-relative`}>
              15 магазинов
            </Link>
          </p>
        </DeliveryItem>
        <DeliveryItem icon={'pin_2'} time={'20 апреля'} priceFree={true}>
          <p>
            Забрать из{' '}
            <Link to={'/'} className={`${styles.underline} position-relative`}>
              пункта самовывоза{' '}
            </Link>
            с примеркой
          </p>
        </DeliveryItem>
      </div>
    </section>
  );
};
