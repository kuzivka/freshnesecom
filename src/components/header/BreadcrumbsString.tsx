import { Breadcrumbs, Typography } from '@mui/material';
import { breadcrumbs } from '@styles/header-styles';
import { useLocation } from 'react-router-dom';

export default function BreadcrumbsString() {
  const location = useLocation();

  const locationName = () => {
    const locationNameInArray = location.pathname.replace('/', '').split('-');
    for (let i = 0; i < locationNameInArray.length; i++) {
      locationNameInArray[i] =
        locationNameInArray[i].charAt(0).toUpperCase() +
        locationNameInArray[i].substring(1);
    }
    return locationNameInArray.join(' ');
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ ...breadcrumbs }}>
      <Typography>Home Page</Typography>
      <Typography>{locationName()}</Typography>
    </Breadcrumbs>
  );
}
