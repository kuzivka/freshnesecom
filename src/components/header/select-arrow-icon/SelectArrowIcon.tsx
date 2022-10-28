import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { selectArrowIcon } from './SelectArrowIconStyles';

export function SelectArrowIcon(props: Object) {
  return <Arrow style={selectArrowIcon} {...props} />;
}
