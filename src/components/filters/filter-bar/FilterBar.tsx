import { Box, Button } from '@mui/material';
import { useGetProductsQuery } from '@services/ecommerce';
import { resetAll } from '@store/reducers/listSlice';
import { getProductsMinMaxPrice } from '@utils/getProductsMinMaxPrice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BrandFilter from '../brand/BrandFilter';
import CategoriesFilter from '../category/CategoryFilter';
import { PriceFilter } from '../price/PriceFilter';
import RateFilter from '../rate/RateFilter';
import {
  filterBarContainer,
  filterBarInDrawer,
  resetButton,
} from './FilterBarStyles';

export interface ResetPrice {
  resetPriceRange(): void;
}
interface IFilterBarProps {
  inDrawer?: boolean;
}

export default function FilterBar({ inDrawer }: IFilterBarProps) {
  const { min, max, data } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data,
      min: getProductsMinMaxPrice(data).min,
      max: getProductsMinMaxPrice(data).max,
    }),
  });
  const resetPriceRange = () => {
    setMinValue(min);
    setMaxValue(max);
  };
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(resetAll());
    resetPriceRange();
  };

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [max, min]);

  return (
    <Box
      sx={{
        ...filterBarContainer,
        ...(inDrawer && filterBarInDrawer),
      }}
    >
      <CategoriesFilter />
      <BrandFilter />
      <RateFilter />
      {data && (
        <PriceFilter
          min={min}
          max={max}
          minValue={minValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
        />
      )}
      <Button sx={resetButton} onClick={resetClick}>
        Reset
      </Button>
    </Box>
  );
}
