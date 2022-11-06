import { Product } from '@common/type';
import {
  searchInput,
  searchInputSelect,
} from '@components/header/search-input/SearchInputStyles';
import {
  Box,
  Button,
  InputBase,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { getUnits } from '@utils/getUnits';
import {
  ChangeEvent,
  useCallback,
  useMemo,
  useState,
  KeyboardEvent,
  MouseEvent,
} from 'react';

interface PricePanelProps {
  product: Product;
}

export default function PricePanel({ product }: PricePanelProps) {
  const units = getUnits(product);
  const [selectedUnit, setUnit] = useState(units[0]);
  const [productNumber, setProductNumber] = useState(1);

  const getPrice = useMemo(() => {
    const productAmount = productNumber < 1 ? 1 : productNumber;
    if (selectedUnit === 'pcs' && !!product.price.pcs) {
      return (product.price.pcs * productAmount).toFixed(2);
    } else if (selectedUnit === 'kg') {
      return (product.price.kg * productAmount).toFixed(2);
    } else if (selectedUnit === 'pckg') {
      return (product.price.pckg * productAmount).toFixed(2);
    } else if (selectedUnit === 'box') {
      return (product.price.box * productAmount).toFixed(2);
    }
  }, [
    product.price.box,
    product.price.kg,
    product.price.pckg,
    product.price.pcs,
    productNumber,
    selectedUnit,
  ]);

  const maxAmount = useMemo(() => {
    if (selectedUnit === 'pcs' && product.stock.pcs) {
      return product.stock.pcs;
    } else if (selectedUnit === 'kg') {
      return product.stock.kg;
    } else if (selectedUnit === 'pckg') {
      return product.stock.pckg;
    } else if (selectedUnit === 'box') {
      return product.stock.box;
    }
  }, [
    product.stock.box,
    product.stock.kg,
    product.stock.pckg,
    product.stock.pcs,
    selectedUnit,
  ]);

  const getDiscountPrice = useMemo(() => {
    if (getPrice && product.discount) {
      return ((Number(getPrice) * (100 - product.discount)) / 100).toFixed(2);
    } else return getPrice;
  }, [getPrice, product.discount]);

  const handleAmountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === '') {
        setProductNumber(1);
      } else {
        setProductNumber(Number(event.target.value.replace(/^0+/, '')));
      }
    },
    []
  );
  const disableInput = (
    event: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Box sx={{display:'flex'}}>
        <Box>
          <Typography sx={{}} variant='h5'>{getDiscountPrice} USD</Typography>
          {product.discount && <Typography>{getPrice}</Typography>}
        </Box>
        <Paper
          elevation={0}
          component="form"
          sx={{
            ...searchInput,
            height: 'fit-content',
            width: 'fit-content',
            p: '14px 16px',
          }}
        >
          <InputBase
            type="number"
            defaultValue={1}
            inputProps={{
              onKeyDown: disableInput,
              inputMode: 'numeric',
              pattern: '[0-9]*',
              min: 1,
              max: maxAmount,
            }}
            value={productNumber}
            onChange={handleAmountChange}
            sx={{
              input: {
                minWidth: '40px',
                width: 'fit-content',
                caretColor: 'transparent',
                cursor: 'default',
              },
            }}
          />
          <Select
            disableUnderline
            variant="standard"
            sx={searchInputSelect}
            value={selectedUnit}
            onChange={(event: SelectChangeEvent) => setUnit(event.target.value)}
          >
            {units.map((unit) => (
              <MenuItem value={unit} key={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </Paper>
        <Button></Button>
      </Box>
      <Button></Button>
    </Box>
  );
}
