import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

export default function Product() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg="gray.800"
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "calc(100% - 5px)",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(/hero.avif)`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src="/hero.avif"
            alt="An image of the product"
          />
        </Box>
        <Stack pt={10} align={"center"} color="gray.50">
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Aesthetic Sculpture
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text textDecoration={"line-through"} color={"gray.400"}>
              899
            </Text>
            <Text fontWeight={800} fontSize={"lg"}>
              600 USDC
            </Text>
          </Stack>
        </Stack>

        <Button
          bgColor="purple.500"
          color="purple.50"
          size="sm"
          mt={2}
          ml="auto"
          _hover={{
            bgColor: "purple.600",
            fontWeight: 600,
          }}
          rounded="full"
        >
          Buy Now
        </Button>
      </Box>
    </Center>
  );
}
