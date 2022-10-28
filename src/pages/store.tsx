import { Box } from "@chakra-ui/react";

import ProductCreateForm from "../components/createProduct";

export default function Store() {
  return (
    <Box minH="100vh">
      <ProductCreateForm />
      <Box
        bgImage="url('/bg.webp')"
        bgSize="cover"
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        zIndex="-1"
      />
    </Box>
  );
}
