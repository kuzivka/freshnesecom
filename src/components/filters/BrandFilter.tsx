import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { setFarmFilter } from '@reducers/listSlice';
import { useGetFarmsQuery } from '@services/ecommerce';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function BrandFilter() {
  const { data: farms } = useGetFarmsQuery();
  const dispatch = useDispatch();
  const farmsToFilter = useSelector(
    (state: RootState) => state.productList.farmFilter,
    shallowEqual
  );
  const chosenCategory = useSelector(
    (state: RootState) => state.productList.categoryFilter
  );
  const [checkedFarms, setCheckedFarms] = useState(farmsToFilter);

  const checkboxChangeHandler = useCallback(
    (farmId: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const farmsSet = new Set(checkedFarms);
      if (event.target.checked) {
        setCheckedFarms(Array.from(farmsSet.add(farmId)));
      } else if (!event.target.checked) {
        farmsSet.delete(farmId);
        setCheckedFarms(Array.from(farmsSet));
      }
    },
    [checkedFarms]
  );

  const farmsByCategory = farms?.filter(
    (farm) => farm.categoryId === chosenCategory || chosenCategory==='all'
  );

  const isChecked = (farmId: number) => farmsToFilter.includes(farmId);

  useEffect(() => {
    dispatch(setFarmFilter(checkedFarms));
  }, [checkedFarms, dispatch]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600' }}>
        Brands
      </Typography>
      <List
        sx={{ display: 'flex', flexDirection: 'column', gap: '12px', p: 0 }}
      >
        {farmsByCategory?.map((farm) => (
          <ListItem key={farm.id} sx={{ p: 0, display: 'flex' }}>
            <FormControlLabel
              sx={{
                ml: '0',
              }}
              label={
                <Typography
                  sx={{ fontSize: '14px', fontFamily: 'Open Sans', pl: 1 }}
                  variant="body1"
                >
                  {farm.name}
                </Typography>
              }
              control={
                <Checkbox
                  value={farm.id}
                  sx={{ p: 0, color: '#d1d1d1'}}
                  checked={isChecked(farm.id)}
                  onChange={checkboxChangeHandler(farm.id)}
                />
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
