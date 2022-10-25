import { SvgIcon } from '@mui/material';
import { sortSelectIcon } from './SortIconStyles';
import { ReactComponent as SelectArrow } from '@assets/svg/select-arrow.svg';

export function SortIcon(props: Object) {
  return (
    <SvgIcon sx={sortSelectIcon} viewBox="0 0 7 4" {...props}>
      <SelectArrow />
    </SvgIcon>
  );
}
