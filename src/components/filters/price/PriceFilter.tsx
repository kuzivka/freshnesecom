import { filterContainer, filterLabel } from '@components/filters/FilterStyles';
import { Box, InputLabel, Slider, TextField, Typography } from '@mui/material';
import { setPriceRange } from '@store/reducers/listSlice';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  inputsContainer,
  inputSeparator,
  priceInput,
  priceInputBase,
  priceInputLabel,
  priceSlider,
} from './PriceFilterStyles';

interface PriceFilterProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  setMinValue: (value:number) => void;
  setMaxValue: (value:number) => void;
}

export function PriceFilter({
  minValue,
  maxValue,
  setMaxValue,
  setMinValue,
  min,
  max,
}: PriceFilterProps) {
  const dispatch = useDispatch();

  const [inputError, setInputError] = useState(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setMinValue(Math.min(...newValue));
      setMaxValue(Math.max(...newValue));
    }
  };

  const handlePriceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.id === 'min-value'
      ? setMinValue(Number(event.target.value.replace(/[^0-9.]+/g, '')))
      : setMaxValue(Number(event.target.value.replace(/[^0-9.]+/g, '')));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!inputError) {
        dispatch(setPriceRange([minValue, maxValue]));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch, inputError, maxValue, minValue]);

  useEffect(() => {
    setInputError(minValue > maxValue);
  }, [maxValue, minValue]);

  return (
    <Box sx={filterContainer}>
      <Typography variant="h5" sx={filterLabel}>
        Price
      </Typography>
      <Slider
        sx={priceSlider}
        disableSwap
        min={min}
        max={max}
        value={[minValue, maxValue]}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <Box sx={inputsContainer}>
        <Box>
          <InputLabel sx={priceInputLabel} htmlFor="min-value">
            Min
          </InputLabel>
          <TextField
            error={inputError}
            inputProps={priceInput}
            sx={priceInputBase}
            id="min-value"
            placeholder="0"
            value={minValue}
            onChange={handlePriceInputChange}
          />
        </Box>
        <Typography variant="caption" sx={inputSeparator}>
          -
        </Typography>
        <Box>
          <InputLabel sx={priceInputLabel} htmlFor="min-value">
            Max
          </InputLabel>
          <TextField
            error={inputError}
            sx={priceInputBase}
            inputProps={priceInput}
            id="max-value"
            placeholder="000"
            value={maxValue}
            onChange={handlePriceInputChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
