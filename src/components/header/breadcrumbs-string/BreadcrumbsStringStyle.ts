import { C1 } from '@styles/colors';

export const breadcrumbsLink = {
  textTransform: 'capitalize',
  fontSize: '12px',
  color: C1.C,
  '&:last-child': {
    '& >*': { color: C1.A },
  },
};
export const breadcrumbs = {
  p: '16px',
  pl: '36px',
  color: C1.C,
  fontSize: '12px',
  '& .MuiBreadcrumbs-li:last-child': { '& >*': { color: C1.A } },
};
