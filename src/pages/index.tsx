import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Index = () => (
  <Box minH="100vh">
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
    <NavBar />
    <Hero />
  </Box>
);

export default Index;
