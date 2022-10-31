import FilterBar from '@components/filters/filter-bar/FilterBar';
import PaginationContainer from '@components/product-list/pagination/Pagination';
import ProductListTitle from '@components/product-list/product-list-title/ProductListTitle';
import ProductList from '@components/product-list/product-list/ProductList';
import SelectForSorting from '@components/product-list/sorting/SelectForSorting';
import { Box } from '@mui/material';
import { getFilteredProducts } from '@store/selectors/getFilteredProducts';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { allProductsContent } from './AllProductPageStyle';

export default function AllProducts() {
  const PRODUCTS_ON_PAGE = 5;

  const filteredProducts = useSelector(getFilteredProducts);
  const [pagesIndexes, setPagesIndexes] = useState([4]);

  const amountOfPages = useMemo(
    () => Math.ceil(filteredProducts?.length / PRODUCTS_ON_PAGE),
    [filteredProducts?.length]
  );

  const productsIndexes = [
    (pagesIndexes[0] - 1) * PRODUCTS_ON_PAGE,
    (pagesIndexes[pagesIndexes?.length - 1] - 1) * PRODUCTS_ON_PAGE +
      (PRODUCTS_ON_PAGE - 1),
  ];

  const productsToShow = filteredProducts?.filter((product, index) => {
    return index >= productsIndexes[0] && index <= productsIndexes[1];
  });

  const productsLeft = () => {
    const productsLeftNumber =
      filteredProducts?.length -
      pagesIndexes[pagesIndexes?.length - 1] * PRODUCTS_ON_PAGE;
    return productsLeftNumber >= 0 ? productsLeftNumber : 0;
  };

  const firstPage = pagesIndexes[0];
  const scrollToTop = useCallback(() => {
    if (pagesIndexes.length === 1) {
      window.scrollTo({ top: 0 });
    }
  }, [pagesIndexes.length]);

  useEffect(() => {
    setPagesIndexes([1]);
  }, [filteredProducts]);

  useEffect(() => {
    scrollToTop();
  }, [firstPage, scrollToTop]);

  return (
    <>
      <ProductListTitle />
      <SelectForSorting />
      <Box sx={allProductsContent}>
        <FilterBar />
        <ProductList productsToShow={productsToShow} />
      </Box>
      <PaginationContainer
        productsLeft={productsLeft()}
        amountOfPages={amountOfPages}
        currentPages={pagesIndexes}
        changePage={setPagesIndexes}
      />
    </>
  );
}
