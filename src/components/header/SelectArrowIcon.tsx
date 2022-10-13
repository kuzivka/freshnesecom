import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { selectArrowIcon } from '@styles/header/headerStyles';

export function SelectArrowIcon(props: Object) {
  return <Arrow style={selectArrowIcon} {...props} />;
}
