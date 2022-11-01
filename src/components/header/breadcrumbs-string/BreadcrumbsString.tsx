import { PATH } from '@common/enums';
import { Breadcrumbs, Link } from '@mui/material';
import { useGetProductsQuery } from '@services/ecommerce';
import { useMemo } from 'react';
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { breadcrumbs, breadcrumbsLink } from './BreadcrumbsStringStyle';

export default function BreadcrumbsString() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: products } = useGetProductsQuery();

  const productPage = useMatch(PATH.PRODUCT.path);
  const cart = useMatch(PATH.CART.path);

  const productName = products?.find(
    (product) => Number(product.id) === Number(id)
  )?.name;

  const link = useMemo(() => {
    if (productPage) {
      
      return { name: productName, path: location.pathname };
    } else if (cart) {
      return PATH.CART;
    }
  }, [cart, location.pathname, productName, productPage]);

  const linkClickHandler = () => navigate(PATH.ALL_PRODUCTS.path);
  const handleNavigate = (link: string) => () => navigate(link);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbs}>
      <Link sx={breadcrumbsLink} onClick={linkClickHandler}>
        All Products
      </Link>

      {link && (
        <Link
          sx={breadcrumbsLink}
          key={link.path}
          onClick={handleNavigate(link.path)}
        >
          {link?.name}
        </Link>
      )}
    </Breadcrumbs>
  );
}
