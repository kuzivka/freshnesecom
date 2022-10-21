import StarRating from '@components/common/StarRating';
import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { setRateFilter } from '@reducers/listSlice';
import {
  filterContainer,
  filterLabel,
  filterList,
} from '@styles/filters/filters';
import {
  rateCheckbox,
  rateLabel,
  rateListItem,
} from '@styles/filters/rateFilter';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function RateFilter() {
  const RATES = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const ratesToFilter = useSelector(
    (state: RootState) => state.productList.rateFilter,
    shallowEqual
  );

  const [checkedRate, setCheckedRate] = useState<number[]>(ratesToFilter);

  const checkboxChangeHandler = useCallback(
    (farmId: number) =>
      (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const rateSet = new Set(checkedRate);
        if (checked) {
          setCheckedRate(Array.from(rateSet.add(farmId)));
        } else if (!checked) {
          rateSet.delete(farmId);
          setCheckedRate(Array.from(rateSet));
        }
      },
    [checkedRate]
  );

  const isChecked = useCallback(
    (rate: number) => ratesToFilter.includes(rate),
    [ratesToFilter]
  );
  const sortedRates = RATES.sort((a, b) => b - a);

  useEffect(() => {
    setCheckedRate(ratesToFilter);
  }, [ratesToFilter]);

  useEffect(() => {
    dispatch(setRateFilter(checkedRate));
  }, [checkedRate, dispatch]);

  return (
    <Box sx={filterContainer}>
      <Typography variant="h5" sx={filterLabel}>
        Ratings
      </Typography>
      <List sx={filterList}>
        {sortedRates.map((rate) => (
          <ListItem key={rate} sx={rateListItem}>
            <FormControlLabel
              sx={rateLabel}
              label={<StarRating value={rate} />}
              control={
                <Checkbox
                  value={rate}
                  sx={rateCheckbox}
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
