import { ReactComponent as StarOutline } from '@assets/svg/star-outline.svg';
import { ReactComponent as Star } from '@assets/svg/star.svg';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

interface IRating {
  value: number;
  text?: string;
  color?: string;
  size?: string;
  amount?: number;
}

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
`;
function Rating({
  value,
  text,
  amount = 5,
  color = '#ffc600',
}: IRating): JSX.Element {
  return (
    <Box display="flex" alignItems="center">
      <ul style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
        {Array.from({ length: amount }, (_, i) => i + 1).map((number) => (
          <li key={number} style={{ display: 'inline' }}>
            <StyledSpan color={color}>
              {Math.ceil(value) >= number ? <Star /> : <StarOutline />}
            </StyledSpan>
          </li>
        ))}

        {text && (
          <Typography variant="body1" sx={{ ml: 1 }}>
            {text}
          </Typography>
        )}
      </ul>
    </Box>
  );
}

export default Rating;
