import { Box, Button, Chip, List, ListItem, Typography } from '@mui/material';
import { greenButton, greenChip } from '@styles/mixins';
import { useMemo } from 'react';
import { ReactComponent as Arrow } from '@assets/svg/arrow-white.svg';
import {
  pageNumberButton,
  pagesCaption,
  pagesList,
  pagesListItem,
  paginationContainer,
  selectedPage,
} from './PaginationStyle';

interface IPaginationProps {
  productsLeft: number;
  amountOfPages: number;
  currentPages: number[];
  changePage: any;
}

export default function PaginationContainer({
  productsLeft,
  amountOfPages,
  currentPages,
  changePage,
}: IPaginationProps) {
  const onPageChange = (page: number) => () => {
    changePage([page]);
  };
  const onShowMoreButtonClick = () => {
    changePage([currentPages[0], currentPages[currentPages.length - 1] + 1]);
  };
  const pagesArray = useMemo(
    () => Array.from({ length: amountOfPages }, (_, i) => i + 1),
    [amountOfPages]
  );
  const isSelected = (pageNumber: number) =>
    pageNumber >= currentPages[0] &&
    pageNumber <= currentPages[currentPages.length - 1];

  return (
    <Box sx={paginationContainer}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={pagesCaption} variant="caption">
          Page:
        </Typography>
        <List sx={pagesList}>
          {pagesArray.map((pageNumber) => (
            <ListItem key={pageNumber} sx={pagesListItem}>
              <Button
                sx={{
                  ...pageNumberButton,
                  ...(isSelected(pageNumber) && selectedPage),
                }}
                onClick={onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      {!(currentPages[currentPages.length - 1] === amountOfPages) && (
        <Button
          endIcon={<Arrow style={{ marginRight: '8px' }} />}
          sx={{
            ...greenButton,
            color: '#fff',
            textTransform: 'none',
            gap: '6px',
            p: '12px 16px',
          }}
          onClick={onShowMoreButtonClick}
        >
          Show more products
        </Button>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Chip sx={{ ...greenChip }} label={`${productsLeft}`} />
        <Typography
          variant="caption"
          sx={{ fontSize: '12px', color: '#A9A9A9', fontFamily: 'Open Sans' }}
        >
          Products
        </Typography>
      </Box>
    </Box>
  );
}
