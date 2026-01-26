import React from 'react';
import { Container } from '@shared/layout/Container/Container';
import { Fieldset } from '@shared/ui/Fieldset/Fieldset';
import { Legend } from '@shared/ui/Legend/Legend';
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';
import { Counter } from '@shared/ui/Counter/Counter';
import { HeroSlider } from '@pages/HomePage/components/HeroSlider/HeroSlider';

export const HomePage = () => {
  //const { data, isLoading, isError } = useProducts();
  //const { data, isLoading, isError } = useCategoryProducts({ slug: 'smartphones' });
  /*const { data } = useCategory('groceries');*/
  //const { data, isLoading, isError } = useSingleProduct(5);
  const value = '';

  return (
    <div>
      <HeroSlider />
      <Container>
        <h1>HomePage</h1>

        <h3>Filters</h3>
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
        </Fieldset>
        {/*    <QueryState isLoading={isLoading} isError={isError}>
              {data && <ProductGrid data={data} />}
      </QueryState>*/}
      </Container>
    </div>
  );
};
