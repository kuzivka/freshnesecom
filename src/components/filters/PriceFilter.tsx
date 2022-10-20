import { Box, InputLabel, Slider, TextField, Typography } from '@mui/material';
import { setPriceRange } from '@reducers/listSlice';
import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { ResetPrice } from './FilterBar';

interface PriceFilterProps {
  min: number;
  max: number;
}

export const PriceFilter = forwardRef<ResetPrice, PriceFilterProps>(
  ({ min, max }, ref) => {
    const dispatch = useDispatch();

    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    const handleChange = (event: Event, newValue: number | number[]) => {
      if (Array.isArray(newValue)) {
        setMinValue(Math.min(...newValue));
        setMaxValue(Math.max(...newValue));
      }
    };

    useImperativeHandle(ref, () => ({
      resetPriceRange() {
        setMinValue(min);
        setMaxValue(max);
      },
    }));

    const handlePriceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.target.id === 'min-value'
        ? setMinValue(Number(event.target.value.replace(/[^0-9.]+/g, '')))
        : setMaxValue(Number(event.target.value.replace(/[^0-9.]+/g, '')));
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        dispatch(setPriceRange([minValue, maxValue]));
      }, 500);
      return () => clearTimeout(timer);
    }, [dispatch, maxValue, minValue]);

    useEffect(() => {
      setMaxValue(max);
      setMinValue(min);
    }, [max, min]);

    return (
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '16px', pr: 2 }}
      >
        <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600' }}>
          Price
        </Typography>
        <Slider
          sx={{
            height: '6px',
            '& .MuiSlider-thumb': {
              color: '#fff',
              border: '1px solid #d1d1d1',
              height: '20px',
            },
            '& .MuiSlider-rail': {
              color: '#ebebeb',
              borderRadius: '12px',
              opacity: '1',
            },
          }}
          disableSwap
          min={min}
          max={max}
          value={[minValue, maxValue]}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <InputLabel
              sx={{ fontSize: '12px', fontWeight: '600' }}
              htmlFor="min-value"
            >
              Min
            </InputLabel>
            <TextField
              inputProps={{
                style: {
                  fontSize: '14px',
                  padding: '12px 16px 12px 20px',
                  borderRadius: '12px',
                },
              }}
              sx={{
                width: '110px',
                backgroundColor: '#f9f9f9',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: '12px',
                  },
                },
              }}
              id="min-value"
              placeholder="0"
              value={minValue}
              onChange={handlePriceInputChange}
            />
          </Box>
          <span style={{ position: 'relative', top: '5px' }}>-</span>
          <Box>
            <InputLabel
              sx={{ fontSize: '12px', fontWeight: '600' }}
              htmlFor="min-value"
            >
              Max
            </InputLabel>
            <TextField
              sx={{
                width: '110px',
                backgroundColor: '#f9f9f9',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: '12px',
                  },
                },
              }}
              inputProps={{
                style: {
                  fontSize: '14px',
                  padding: '12px 16px 12px 20px',
                },
              }}
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
);
