import { List } from '@mui/material';
import { Box } from '@mui/system';
import { useGetCategoriesQuery } from '@services/ecommerce';
import {
  categoryMenuContainer,
  headerCategoryMenu,
} from '@components/header/styles/headerStyles';
import DropDownMenu from './DropDownMenu';

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
