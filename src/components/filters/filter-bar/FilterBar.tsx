import { Box, Button, useMediaQuery } from '@mui/material';
import { resetAll } from '@store/reducers/listSlice';
import { useGetProductsQuery } from '@services/ecommerce';
import {
  filterBarContainer,
  filterBarContainerResponsive,
  resetButton,
} from './FilterBarStyles';
import { getProductsMinMaxPrice } from '@utils/getProductsMinMaxPrice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import RateFilter from '../rate/RateFilter';
import { PriceFilter } from '../price/PriceFilter';
import BrandFilter from '../brand/BrandFilter';
import CategoriesFilter from '../category/CategoryFilter';

export interface ResetPrice {
  resetPriceRange(): void;
}

export default function FilterBar() {
  const { min, max, data } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data,
      min: getProductsMinMaxPrice(data).min,
      max: getProductsMinMaxPrice(data).max,
    }),
  });
  const dispatch = useDispatch();
  const childRef = useRef<ResetPrice>(null);
  const resetClick = () => {
    dispatch(resetAll());
    childRef.current?.resetPriceRange();
  };

  const tablet = useMediaQuery('(max-width: 1024px)');
  const mobile = useMediaQuery('(max-width: 700px)');

  return (
    <Box
      sx={{
        ...filterBarContainer,
        ...((tablet || mobile) && filterBarContainerResponsive),
      }}
    >
      <CategoriesFilter />
      <BrandFilter />
      <RateFilter />
      {data && <PriceFilter min={min} max={max} ref={childRef} />}
      <Button sx={resetButton} onClick={resetClick}>
        Reset
      </Button>
    </Box>
  );
}
