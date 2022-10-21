import { ReactComponent as StarOutline } from '@assets/svg/star-outline.svg';
import { ReactComponent as Star } from '@assets/svg/star.svg';
import { Box, List, ListItem } from '@mui/material';
import React from 'react';
import {
  starContainer,
  starList,
  starListItem,
  starRatingContainer,
} from '@components/rating/RatingStyle';

interface IRating {
  value: number;
  text?: string;
  color?: string;
  size?: string;
  amount?: number;
}

export default function StarRating({
  value,
  amount = 5,
  color = '#ffc600',
}: IRating): JSX.Element {
  const amountOfStars = Array.from({ length: amount }, (_, i) => i + 1);
  const shouldColor = (number: number) => Math.ceil(value) >= number;
  return (
    <Box sx={starRatingContainer}>
      <List sx={starList}>
        {amountOfStars.map((number) => (
          <ListItem key={number} sx={starListItem}>
            <Box sx={starContainer} component="span" color={color}>
              {shouldColor(number) ? <Star /> : <StarOutline />}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
