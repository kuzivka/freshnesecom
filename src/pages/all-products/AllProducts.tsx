import FilterBar from '@components/filters/filter-bar/FilterBar';
import ProductList from '@components/product-list/product-list/ProductList';
import ProductListTitle from '@components/product-list/product-list-title/ProductListTitle';
import { Box } from '@mui/material';
import { allProductsContent } from './AllProductPageStyle';
import SelectForSorting from '@components/product-list/sorting/SelectForSorting';
import PaginationContainer from '@components/product-list/pagination/Pagination';
import { getFilteredProducts } from '@store/selectors/getFilteredProducts';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

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

  useEffect(() => {
    setPagesIndexes([1]);
  }, [filteredProducts]);

  useEffect(() => {
    if (pagesIndexes?.length === 1) {
      window.scrollTo({ top: 0 });
    }
  }, [pagesIndexes, pagesIndexes?.length]);

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
