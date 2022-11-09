import { ReactComponent as Arrow } from '@assets/svg/show-more-arrow.svg';
import { PATH } from '@common/enums';
import { Box, Button, Typography } from '@mui/material';
import { categoryFilter } from '@store/reducers/listSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  showMoreButton,
  showMoreHeader,
  showMoreHeaderContainer,
} from './MoreProductsHeaderStyle';

interface MoreProductsHeaderProps {
  categoryId: number;
}

export default function MoreProductsHeader({
  categoryId,
}: MoreProductsHeaderProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moreProductsClickHandler = () => {
    dispatch(categoryFilter(categoryId));
    navigate(PATH.ALL_PRODUCTS.path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <Box sx={showMoreHeaderContainer}>
      <Typography sx={showMoreHeader}>You will maybe love</Typography>
      <Button
        endIcon={<Arrow />}
        sx={showMoreButton}
        onClick={moreProductsClickHandler}
      >
        More products
      </Button>
    </Box>
  );
}
