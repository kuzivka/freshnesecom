import { Box, Checkbox, List, ListItem, Typography } from "@mui/material";
import { useGetFarmsQuery } from "@services/ecommerce";

export default function BrandFilter() {
 const {data: farms} =useGetFarmsQuery();
  return ( <Box>
    <Typography variant="h5">Farms</Typography>
    <List>
      {farms?.map((category) => (
        <ListItem>
          <Checkbox/>
          <Typography>{category.name}</Typography>
        </ListItem>
      ))}
    </List>
  </Box>);
}
