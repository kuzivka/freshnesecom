import { Header } from '@components/header/header/Header';
import { useEffect } from 'react';

export default function SelectedProduct() {
  useEffect(() => window.scrollTo({ top: 0 }), []);
  return <Header />;
}
