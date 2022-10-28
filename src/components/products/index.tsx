import { SimpleGrid } from "@chakra-ui/react";

import Product from "./Product";

export default function Products() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      gap={{ base: 4, lg: 6 }}
      px={{ base: 4, lg: 18, xl: 24 }}
      py={{ base: 8 }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </SimpleGrid>
  );
}
