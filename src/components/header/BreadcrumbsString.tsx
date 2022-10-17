import { PATH } from '@common/enums';
import { Breadcrumbs, Link } from '@mui/material';
import { breadcrumbs, breadcrumbsLink } from '@styles/header/headerStyles';
import { useHref, useLocation, useNavigate } from 'react-router-dom';

export default function BreadcrumbsString() {
  const location = useLocation();
  const navigate = useNavigate();
  const href = useHref(location.pathname);

  const linkClickHandler = () => navigate(PATH.ALL_PRODUCTS);
  const pathnames = href.replace('#', '').split('/');

  const handleNavigate = (index: number) => () =>
    navigate(pathnames.slice(0, index + 1).join('/'));

  const removeDash = (name: string) => name.replace(/-/g, ' ');

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbs}>
      <Link sx={breadcrumbsLink} onClick={linkClickHandler}>
        All Products
      </Link>
      {pathnames.map(
        (name, index) =>
          name && (
            <Link sx={breadcrumbsLink} onClick={handleNavigate(index)}>
              {removeDash(name)}
            </Link>
          )
      )}
    </Breadcrumbs>
  );
}
