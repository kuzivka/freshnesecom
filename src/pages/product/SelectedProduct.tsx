import { Header } from '@components/header/header/Header';
import { useGetSelectedProductQuery } from '@services/ecommerce';
import React from 'react';
import { useParams } from 'react-router-dom';

interface ISelectedProductPropps {}

export default function SelectedProduct() {
  const params = useParams();
  return (
    <>
      <Header />
    </>
  );
}
