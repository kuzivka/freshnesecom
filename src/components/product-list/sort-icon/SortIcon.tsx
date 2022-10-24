import { SvgIcon } from '@mui/material';
import { sortSelectIcon } from './SortIconStyles';

export function SortIcon(props: Object) {
  return (
    <SvgIcon sx={sortSelectIcon} viewBox="0 0 7 4" {...props}>
      <path
        d="M1.11035 0.900005L3.16535 2.95501C3.25903 3.04813 3.38576 3.1004 3.51785 3.1004C3.64994 3.1004 3.77667 3.04813 3.87035 2.95501L5.87035 0.955005"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </SvgIcon>
  );
}
