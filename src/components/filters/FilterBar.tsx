import { Box, Button } from '@mui/material';
import { resetAll } from '@reducers/listSlice';
import {
  filterBarContainer, resetButton
} from '@styles/filters/filters';
import { productsMinMaxPrice } from '@utils/getProductsMinMaxPrice';
import { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ProductsContext } from '../../App';
import BrandFilter from './BrandFilter';
import CategoriesFilter from './CategoriesFilter';
import { PriceFilter } from './PriceFilter';
import RateFilter from './RateFilter';

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
    <Box sx={filterBarContainer}>
      <CategoriesFilter />
      <BrandFilter />
      <RateFilter />
      <PriceFilter min={min} max={max} ref={childRef} />
      <Button sx={resetButton} onClick={resetClick}>
        Reset 
      </Button>
    </Box>
  );
}
