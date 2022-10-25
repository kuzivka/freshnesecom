import { Box, Button, Chip, List, ListItem, Typography } from '@mui/material';
import { greenButton, greenChip } from '@styles/mixins';
import { useMemo } from 'react';
import { ReactComponent as Arrow } from '@assets/svg/arrow-white.svg';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: '16px 45px',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '12px',
            color: '#A9A9A9',
            fontFamily: 'Open Sans',
            pr: '8px',
          }}
          variant="caption"
        >
          Page:
        </Typography>
        <List sx={{ display: 'flex', gap: '8px', p: 0 }}>
          {pagesArray.map((pageNumber) => (
            <ListItem sx={{ p: 0 }}>
              <Button
                sx={{
                  lineClamp: '1',
                  fontWeight: '400',
                  fontSize: '12px',
                  color: '#151515',
                  ...(isSelected(pageNumber) && { color: '#6A983C' }),
                  p: 0,
                  fontFamily: 'Open Sans',
                  border: 'none',
                  background: 'none',
                  minWidth: 'fit-content',
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
        <Button endIcon={<Arrow style={{marginRight:'8px'}}/>}
          sx={{ ...greenButton, color: '#fff', textTransform: 'none',gap:'6px', p:'12px 16px',   }}
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
