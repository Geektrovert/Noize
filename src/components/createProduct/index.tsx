import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
} from "@chakra-ui/react";

export default function JoinOurTeam() {
  return (
    <Container
      as={Flex}
      maxW="7xl"
      justifyContent="center"
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: 32 }}
      py={{ base: 10, sm: 20, lg: 32 }}
    >
      <Stack
        bg={"gray.50"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack spacing={4}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            Submit a product
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
            We’re looking for eco-friendly, organic & hand-made products from
            innovative creators. Submit the product you’d like to sell, and
            anyone can buy it from our store. The revenue goes directly to you!
          </Text>
        </Stack>

        <Box as="form" mt={10}>
          <Stack spacing={4}>
            <Input
              placeholder="Product Name"
              bg="gray.100"
              border={0}
              color="gray.500"
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              placeholder="Product Price"
              bg="gray.100"
              border={0}
              color="gray.500"
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              type="file"
              placeholder="Image"
              bg="gray.100"
              border={0}
              color="gray.500"
              _placeholder={{
                color: "gray.500",
              }}
              sx={{
                "&::-webkit-file-upload-button, &::file-selector-button": {
                  borderColor: "transparent",
                  borderWidth: 0,
                  bgColor: "purple.100",
                  color: "purple.700",
                  rounded: "lg",
                  mt: "7px",
                },
                _hover: {
                  "&::-webkit-file-upload-button, &::file-selector-button": {
                    borderColor: "purple.700",
                  },
                },
              }}
            />
          </Stack>

          <Button
            mt={8}
            w="full"
            rounded="full"
            bgGradient="linear(to-r, pink.500, purple.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, pink.500)",
              fontWeight: 800,
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
