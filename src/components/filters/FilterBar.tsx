import { Button } from '@mui/material';
import { resetAll } from '@reducers/listSlice';
import { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ProductsContext } from '../../App';
import { productsMinMaxPrice } from '../../utils/getProductsMinMaxPrice';
import BrandFilter from './BrandFilter';
import CategoriesFilter from './CategoriesFilter';
import { PriceFilter } from './PriceFilter';

export interface ResetPrice {
  resetPriceRange(): void;
}

export default function FilterBar() {
  const products = useContext(ProductsContext);
  const { min, max } = productsMinMaxPrice(products?.allProducts);
  const dispatch = useDispatch();
  const childRef = useRef<ResetPrice>(null);
  const resetClick = () => {
    dispatch(resetAll());
    childRef.current?.resetPriceRange();
  };

  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '280px',
        gap: '48px',
      }}
    >
      <CategoriesFilter />
      <BrandFilter />
      <PriceFilter min={min} max={max} ref={childRef} />
      <Button onClick={resetClick}>Reset All</Button>
    </aside>
  );
}
