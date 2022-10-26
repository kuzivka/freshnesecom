import { ReactComponent as Arrow } from '@assets/svg/arrow-white.svg';
import { Box, Button, Chip, List, ListItem, Typography } from '@mui/material';
import { useMemo } from 'react';
import {
  pageListContainer,
  pageNumberButton,
  pagesCaption,
  pagesList,
  pagesListItem,
  paginationContainer,
  productsLeftChip,
  productsLeftContainer,
  selectedPage,
  showMoreButton,
  showMoreButtonIcon,
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
      <Box sx={pageListContainer}>
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
          endIcon={<Arrow style={showMoreButtonIcon} />}
          sx={showMoreButton}
          onClick={onShowMoreButtonClick}
        >
          Show more products
        </Button>
      )}
      <Box sx={productsLeftContainer}>
        <Chip sx={productsLeftChip} label={`${productsLeft}`} />
        <Typography variant="caption" sx={pagesCaption}>
          Products
        </Typography>
      </Box>
    </Box>
  );
}
