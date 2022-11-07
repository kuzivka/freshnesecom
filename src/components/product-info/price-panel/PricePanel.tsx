import { ReactComponent as Arrow } from '@assets/svg/black-arrow.svg';
import { ReactComponent as Plus } from '@assets/svg/plus-btn.svg';
import { Product } from '@common/type';
import { ReactComponent as Heart } from '@assets/svg/heart.svg';
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
  KeyboardEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  addToCartBtn,
  addToWishListBtn,
  mainContent,
  oldPrice,
  panelContainer,
  priceContainer,
  productPrice,
  selectInput,
  selectPaper,
  selectUnit,
} from './PricePanelStyle';

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
  const disableInput = (event: KeyboardEvent<HTMLElement>) => {
    event.preventDefault();
  };
  const handleUnitChange = (event: SelectChangeEvent) => {
    setProductNumber(1);
    setUnit(event.target.value);
  };
  return (
    <Box sx={panelContainer}>
      <Box sx={mainContent}>
        <Box sx={priceContainer}>
          <Typography sx={productPrice} variant="h5">
            {getDiscountPrice} USD
          </Typography>
          {product.discount && (
            <Typography sx={oldPrice}>{getPrice}</Typography>
          )}
        </Box>
        <Paper elevation={0} component="form" sx={selectPaper}>
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
            sx={selectInput}
          />

          <Select
            disableUnderline
            variant="standard"
            IconComponent={Arrow}
            sx={selectUnit}
            value={selectedUnit}
            onChange={handleUnitChange}
          >
            {units.map((unit) => (
              <MenuItem value={unit} key={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </Paper>
        <Button startIcon={<Plus />} sx={addToCartBtn}>
          Add to cart
        </Button>
      </Box>
      <Button sx={addToWishListBtn} startIcon={<Heart />}>
        Add to my wish list
      </Button>
    </Box>
  );
}
