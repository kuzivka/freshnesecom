import { PATH } from '@common/enums';
import { Link } from 'react-router-dom';

export default function AllProductsPage() {
  return <Link to={PATH.CART}>cart</Link>;
}
