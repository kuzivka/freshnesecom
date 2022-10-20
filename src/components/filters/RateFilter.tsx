import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { setRateFilter } from '@reducers/listSlice';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import Rating from '../common/StarRating';

export default function RateFilter() {
  const RATES = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const ratesToFilter = useSelector(
    (state: RootState) => state.productList.rateFilter,
    shallowEqual
  );

  const [checkedRate, setCheckedRate] = useState<number[]>(ratesToFilter);

  const checkboxChangeHandler = useCallback(
    (farmId: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const rateSet = new Set(checkedRate);
      if (event.target.checked) {
        setCheckedRate(Array.from(rateSet.add(farmId)));
      } else if (!event.target.checked) {
        rateSet.delete(farmId);
        setCheckedRate(Array.from(rateSet));
      }
    },
    [checkedRate]
  );

  const isChecked = (farmId: number) => ratesToFilter.includes(farmId);

  useEffect(() => {
    dispatch(setRateFilter(checkedRate));
  }, [checkedRate, dispatch]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600' }}>
        Ratings
      </Typography>
      <List
        sx={{ display: 'flex', flexDirection: 'column', gap: '12px', p: 0 }}
      >
        {RATES.sort((a, b) => b - a).map((rate) => (
          <ListItem key={rate} sx={{ p: 0, display: 'flex' }}>
            <FormControlLabel
              sx={{
                ml: '0',
                gap: '8px',
              }}
              label={<Rating value={rate} />}
              control={
                <Checkbox
                  value={rate}
                  sx={{ p: 0, color: '#d1d1d1' }}
                  checked={isChecked(rate)}
                  onChange={checkboxChangeHandler(rate)}
                />
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
