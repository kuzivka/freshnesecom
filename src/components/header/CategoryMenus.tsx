import { List } from '@mui/material';
import { Box } from '@mui/system';
import {
  categoryMenuContainer,
  headerCategoryMenu,
} from '@styles/header/headerStyles';
import { CategoriesContext } from '../../App';
import { useContext } from 'react';
import DropDownMenu from './DropDownMenu';

export default function CategoryMenu() {
  const categories = useContext(CategoriesContext);

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
