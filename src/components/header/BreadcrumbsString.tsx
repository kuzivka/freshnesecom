import { Breadcrumbs, Typography } from '@mui/material';
import { breadcrumbs } from '@styles/header/headerStyles';
import { useLocation } from 'react-router-dom';

export default function BreadcrumbsString() {
  const location = useLocation();

  const locationName = location.pathname.replace('/', '').replace('-', ' ');

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbs}>
      <Typography>Home Page</Typography>
      <Typography>{locationName}</Typography>
    </Breadcrumbs>
  );
}
