import React, { useState } from 'react';
import styles from './HomePage.module.scss';
import { Container } from '@shared/layout/Container/Container';
/*import { Fieldset } from '@shared/ui/Fieldset/Fieldset';
import { Legend } from '@shared/ui/Legend/Legend';
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';
import { Counter } from '@shared/ui/Counter/Counter';*/
import { HeroSlider } from '@pages/HomePage/components/HeroSlider/HeroSlider';
import { FullScreenPanel } from '@shared/ui/FullScreenPanel/FullScreenPanel';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';

export const HomePage = () => {
  //const { data, isLoading, isError } = useProducts();
  //const { data, isLoading, isError } = useCategoryProducts({ slug: 'smartphones' });
  /*const { data } = useCategory('groceries');*/
  //const { data, isLoading, isError } = useSingleProduct(5);
  // const value = '';

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div>
      <HeroSlider />
      <Container>
        <div className={`${styles.homeWrapper}`}>
          <div className={`${styles.sort}`}>
            <select name="" id="">
              <option value="value1">value1</option>
              <option value="value2">value2</option>
              <option value="value3">value3</option>
            </select>
          </div>
          <button className={`${styles.filterButton}`} onClick={handleToggleFilter}>
            <div>Фильтры</div>
          </button>
          <aside className={`${styles.filters}`}>
            <label htmlFor={'category'}>Категории товаров</label>
            <select id={'category'} name={'category'} className={`${styles.filterCategory}`}>
              <option value="Категория1">Категория1</option>
              <option value="Категория2">Категория2</option>
              <option value="Категория3">Категория3</option>
            </select>
          </aside>
          {isFilterOpen && (
            <FullScreenPanel>
              <CloseButton className={`position-absolute close`} onClose={handleToggleFilter} />
              <div className={`${styles.filterCategory}`}>
                <label htmlFor={'category'}>Категории товаров</label>
                <select id={'category'} name={'category'} className={`${styles.filterCategory}`}>
                  <option value="Категория1">Категория1</option>
                  <option value="Категория2">Категория2</option>
                  <option value="Категория3">Категория3</option>
                </select>
              </div>
            </FullScreenPanel>
          )}
          <div className={`${styles.productList}`}>
            <div className="product__item">product__item1</div>
            <div className="product__item">product__item2</div>
            <div className="product__item">product__item3</div>
            <div className="product__item">product__item4</div>
            <div className="product__item">product__item5</div>
            <div className="product__item">product__item6</div>
            <div className="product__item">product__item7</div>
            <div className="product__item">product__item8</div>
            <div className="product__item">product__item9</div>
            <div className="product__item">product__item10</div>
            <div className="product__item">product__item11</div>
            <div className="product__item">product__item12</div>
            <div className="product__item">product__item13</div>
            <div className="product__item">product__item14</div>
          </div>
          <div className={`${styles.pagination}`}>Pagination</div>
          <div className={`${styles.showMore}`}>Show more</div>
        </div>
        {/*<h3>Filters</h3>
        <Fieldset>
          <Legend>Бренды</Legend>
          <Checkbox
            id={`category_${value}`}
            checked={false}
            name="category"
            value="helmets"
            label={'Шлемы'}
          >
            <Counter value={205187} />
          </Checkbox>

          <Checkbox
            id={`category_${value}`}
            checked={false}
            name="category"
            value="shoes"
            disabled={true}
            label={'Обувь'}
          >
            <Counter value={47} />
          </Checkbox>

          <Checkbox
            id={`category_${value}`}
            checked={true}
            name="category"
            value="snowboards"
            label={'Сноуборды'}
          >
            <Counter value={995} />
          </Checkbox>
        </Fieldset>*/}
        {/*    <QueryState isLoading={isLoading} isError={isError}>
              {data && <ProductGrid data={data} />}
      </QueryState>*/}
      </Container>
    </div>
  );
};
