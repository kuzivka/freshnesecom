import { ReactComponent as StarOutline } from '@assets/svg/star-outline.svg';
import { ReactComponent as BigStarOutline } from '@assets/svg/big-star-outline.svg';
import { ReactComponent as Star } from '@assets/svg/star.svg';
import { ReactComponent as BlackStar } from '@assets/svg/black-star.svg';
import {
  starContainer,
  starList,
  starListItem,
  starRatingContainer,
} from '@components/rating/RatingStyle';
import { Box, List, ListItem } from '@mui/material';

interface IRating {
  value: number;
  amount?: number;
  black?: boolean;
}

export default function StarRating({
  value,
  amount = 5,
  black,
}: IRating): JSX.Element {
  const amountOfStars = Array.from({ length: amount }, (_, i) => i + 1);
  const shouldColor = (number: number) => Math.ceil(value) >= number;
  return (
    <Box sx={starRatingContainer}>
      <List sx={starList}>
        {amountOfStars.map((number) => (
          <ListItem key={number} sx={starListItem}>
            <Box sx={starContainer} component="span">
              {!black && (shouldColor(number) ? <Star /> : <StarOutline />)}
              {black &&
                (shouldColor(number) ? <BlackStar /> : <BigStarOutline />)}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
