import { ReactComponent as Arrow } from '@assets/svg/arrow-white.svg';
import { Box, Button, Chip, List, ListItem, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useMemo } from 'react';
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
  changePage: Dispatch<SetStateAction<number[]>>;
}

export default function PaginationContainer({
  productsLeft,
  amountOfPages,
  currentPages,
  changePage,
}: IPaginationProps) {
  const currentPage = useMemo(
    () => currentPages[currentPages.length - 1],
    [currentPages]
  );

  const onPageChange = (page: number | string) => () => {
    if (typeof page === 'number') {
      changePage([page]);
    }
  };
  const onShowMoreButtonClick = () => {
    changePage([currentPages[0], currentPage + 1]);
  };
  const pagesArray = useMemo(
    () => Array.from({ length: amountOfPages }, (_, i) => i + 1),
    [amountOfPages]
  );
  const getRange = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => i + start);
  };
  const isSelected = (pageNumber: number | string) => {
    if (Number.isInteger(pageNumber)) {
      return pageNumber >= currentPages[0] && pageNumber <= currentPage;
    }
  };
    const leftPage = Math.max(currentPage - 1, 1);
    const rightPage = Math.min(currentPage + 1, amountOfPages);
    const addLeftDots = leftPage > 2;
    const addRightDots = rightPage < amountOfPages - 2;
  const pageListRange = useMemo(() => {


    if (6 >= amountOfPages) {
      return pagesArray;
    }
    if (!addLeftDots && addRightDots) {
      let leftRange = getRange(1, 5);

      return [...leftRange, '...', amountOfPages];
    }
    if (addLeftDots && !addRightDots) {
      let rightRange = getRange(amountOfPages - 5 + 1, amountOfPages);
      return [1, '...', ...rightRange];
    }
    if (addLeftDots && addRightDots) {
      let middleRange = getRange(leftPage, rightPage);
      return [1, '...', ...middleRange, '...', amountOfPages];
    }
  }, [addLeftDots, addRightDots, amountOfPages, leftPage, pagesArray, rightPage]);

  return (
    <Box sx={paginationContainer}>
      <Box sx={pageListContainer}>
        <Typography sx={pagesCaption} variant="caption">
          Page:
        </Typography>
        <List sx={pagesList}>
          {pageListRange?.map((pageNumber, index) => (
            <ListItem key={`${pageNumber}${index}`} sx={pagesListItem}>
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
      {!!productsLeft && (
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
