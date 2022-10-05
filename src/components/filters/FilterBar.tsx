import BrandFilter from './BrandFilter';
import CategoriesFilter from './CategoriesFilter';
import PriceFilter from './PriceFilter';
import { Button } from '@mui/material';

export default function FilterBar() {
  return (
    <>
      <CategoriesFilter />
      <BrandFilter />
      <PriceFilter />
      <Button>Reset All</Button>
    </>
  );
}
