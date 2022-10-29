import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

import useMakePurchase from "../../hooks/useMakePurchase";

export type ProductProps = {
  id: number;
  name: string;
  owner: string;
  creator: string;
  price: number;
  image_url: string;
  sellable: boolean;
};

export default function Product({ id, name, price, image_url }: ProductProps) {
  const [isLoading, setLoading] = useState(false);
  const makePurchase = useMakePurchase();

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
            backgroundImage: `url(${image_url})`,
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
            src={image_url}
            alt="An image of the product"
            fallback={
              <Image
                src="/loading.gif"
                objectFit={"cover"}
                height={230}
                rounded={"lg"}
                width={282}
                alt="Loading Image"
              />
            }
          />
        </Box>
        <Stack pt={10} align={"center"} color="gray.50">
          <Heading fontSize="2xl" fontWeight={500}>
            {name}
          </Heading>
          <Text fontSize="md" color="purple.100">
            {price.toString()}&nbsp;USDC
          </Text>
        </Stack>

        <Button
          w="full"
          size="sm"
          mt={4}
          ml="auto"
          _hover={{
            fontWeight: 600,
          }}
          rounded="full"
          isLoading={isLoading}
          loadingText="Purchasing"
          onClick={() => {
            setLoading(true);
            makePurchase(id, price)
              .catch((e) => console.log(e))
              .finally(() => setLoading(false));
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Center>
  );
}
