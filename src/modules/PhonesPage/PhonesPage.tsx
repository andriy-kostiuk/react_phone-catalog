import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { getProductsByCategory } from '../../servises/products';
import { ProductsCatalog } from '../ProductsCatalog';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    getProductsByCategory('phones').then(setPhones);
  }, []);

  return <ProductsCatalog title="Mobile phones" products={phones} />;
};