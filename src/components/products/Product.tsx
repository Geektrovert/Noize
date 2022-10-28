import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function Product() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
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
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Aesthetic Sculpture
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text textDecoration={"line-through"} color={"gray.600"}>
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
