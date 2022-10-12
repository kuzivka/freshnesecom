import { List } from '@mui/material';
import { Box } from '@mui/system';
import { useGetCategoriesQuery } from '@services/ecommerce';
import { headerCategoryMenu } from '@styles/header/headerStyles';
import DropDownMenu from './DropDownMenu';

export default function CategoryMenu() {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <Box sx={{ pl: '16px' }}>
      <List sx={headerCategoryMenu}>
        {categories &&
          categories.map((category) => (
            <DropDownMenu key={category.id} {...category} />
          ))}
      </List>
    </Box>
  );
}
