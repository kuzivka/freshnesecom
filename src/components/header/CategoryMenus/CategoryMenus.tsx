import { List } from '@mui/material';
import { Box } from '@mui/system';
import { useGetCategoriesQuery } from '@services/ecommerce';
import {
  categoryMenuContainer,
  headerCategoryMenu,
} from './CategoryMenusStyles';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

export default function CategoryMenu() {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <Box sx={categoryMenuContainer}>
      <List sx={headerCategoryMenu}>
        {categories?.map((category) => (
          <DropDownMenu key={category.id} {...category} />
        ))}
      </List>
    </Box>
  );
}
