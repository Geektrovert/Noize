import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import Product, { type ProductProps } from "./Product";
import useStoreContract from "../../hooks/useStoreContract";

export default function Products() {
  const storeContract = useStoreContract();
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    storeContract?.functions
      .getAllProducts()
      .then((result) => {
        setProducts(result?.[0] ?? []);
        console.log({ products: result?.[0] });
      })
      .catch((err) => console.log({ err }));
  }, [storeContract]);

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      gap={{ base: 4, lg: 6 }}
      px={{ base: 4, lg: 18, xl: 24 }}
      py={{ base: 8 }}
    >
      {products.map((product) => (
        <Product key={product.id} {...product} image_url={product.image_url} />
      ))}
    </SimpleGrid>
  );
}
