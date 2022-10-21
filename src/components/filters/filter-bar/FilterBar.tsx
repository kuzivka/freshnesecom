import { Box, Button } from '@mui/material';
import { resetAll } from '@store/reducers/listSlice';
import { useGetProductsQuery } from '@services/ecommerce';
import { filterBarContainer, resetButton } from './FilterBarStyles';
import { productsMinMaxPrice } from '@utils/getProductsMinMaxPrice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
// import BrandFilter from '../brand-filter/BrandFilter';
// import CategoriesFilter from '../category-filter/CategoryFilter';
import RateFilter from '../rate-filter/RateFilter';
import { PriceFilter } from '../price-filter/PriceFilter';
import BrandFilter from '../brand-filter/BrandFilter';

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
      {/* <CategoriesFilter /> */}
      <BrandFilter />
      <RateFilter />
      <PriceFilter min={min} max={max} ref={childRef} />
      <Button sx={resetButton} onClick={resetClick}>
        Reset
      </Button>
    </Box>
  );
}
