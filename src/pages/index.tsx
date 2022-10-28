import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Index = () => (
  <Box minH="100vh" bgImage="url('/bg.webp')" bgSize="cover">
    <NavBar />
    <Hero />
  </Box>
);

export default Index;
