import { useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Flex,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

import usePendingVerifications from "../hooks/usePendingVerifications";

export default function Verifier() {
  const { data, isLoading, isError } = usePendingVerifications();
  useEffect(() => console.log({ data }), [data]);

  return (
    <Box minH="100vh" px={{ base: 4, lg: 18, xl: 24 }} py={{ base: 8 }}>
      <Center>
        <Heading>Pending Verifications</Heading>
      </Center>

      <Stack direction="column" gap={3} maxW="7xl">
        {data
          ?.filter(({ index }) => index !== 0)
          .map(({ index, nid }) => (
            <Flex
              key={index}
              bgColor="rgba(0, 0, 0, 0.5)"
              backdropFilter="saturate(180%) blur(5px)"
              p={3}
              align="center"
              justify="space-between"
            >
              <Text fontFamily="mono" fontSize="2xl">
                {nid}
              </Text>

              <Button
                bgColor="green.500"
                color="purple.50"
                _hover={{ bgColor: "green.600" }}
                rounded="full"
              >
                Verify
              </Button>
            </Flex>
          ))}
      </Stack>
    </Box>
  );
}
