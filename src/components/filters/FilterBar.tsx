import { Box, Button } from '@mui/material';
import { resetAll } from '@reducers/listSlice';
import { useGetProductsQuery } from '@services/ecommerce';
import { filterBarContainer, resetButton } from '@styles/filters/filters';
import { productsMinMaxPrice } from '@utils/getProductsMinMaxPrice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import BrandFilter from './BrandFilter';
import CategoriesFilter from './CategoriesFilter';
import { PriceFilter } from './PriceFilter';
import RateFilter from './RateFilter';

export interface ResetPrice {
  resetPriceRange(): void;
}

export default function FilterBar() {
  const { data: allProducts } = useGetProductsQuery();

  const { min, max } = productsMinMaxPrice(allProducts);
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
