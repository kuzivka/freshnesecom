import { List } from '@mui/material';
import { useGetCategoriesQuery } from '@services/ecommerce';
import { headerCategoryMenu } from '@styles/header-styles';
import DropDownMenu from './DropDownMenu';

export default function CategoryMenu() {
  const { data: categories } = useGetCategoriesQuery('');

  return (
    <List sx={headerCategoryMenu}>
      {categories && categories.map((category) => <DropDownMenu {...category} />)}
    </List>
  );
}
