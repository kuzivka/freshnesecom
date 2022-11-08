import { Product } from '@common/type';
import { Box, Chip, Grid } from '@mui/material';
import {
  bigPhoto,
  chipContainer,
  chips,
  imgStyle,
  productPhotosContainer,
  smallImg,
  smallPhoto,
} from './ProductPhotosStyle';

interface IProductPhotosProps {
  product: Product | undefined;
}

export default function ProductPhotos({ product }: IProductPhotosProps) {
  return (
    <Box sx={productPhotosContainer}>
      <Box sx={chipContainer}>
        {product?.discount && (
          <Chip sx={chips} label={`- ${product.discount}%`} />
        )}
        {!product?.shippingPrice && <Chip sx={chips} label="Free shipping" />}
      </Box>
      <Grid container columnSpacing={{xs:1, md:4 }} rowSpacing={{xs:1,md:2.5}}>
        <Grid sx={bigPhoto} item xs={12}>
          <img style={imgStyle} alt={product?.name} src={product?.img[0]} />
        </Grid>
        <Grid sx={smallPhoto} item xs={6}>
          <img style={smallImg} alt={product?.name} src={product?.img[1]} />
        </Grid>
        <Grid sx={smallPhoto} item xs={6}>
          <img style={smallImg} alt={product?.name} src={product?.img[2]} />
        </Grid>
      </Grid>
    </Box>
  );
}
