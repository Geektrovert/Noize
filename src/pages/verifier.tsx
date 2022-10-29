import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Flex,
  Stack,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

import usePendingVerifications from "../hooks/usePendingVerifications";

export default function Verifier() {
  const [nameForNID, setNameForNID] = useState<Record<string, string>>({});
  const { data } = usePendingVerifications();

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
              px={4}
              py={2}
              align="center"
              justify="space-between"
            >
              <Stack direction="row" gap={2} align="center">
                <Text fontSize="xl">NID:&nbsp;</Text>
                <Text fontFamily="mono" fontSize="xl" fontWeight={700}>
                  {nid}
                </Text>
              </Stack>

              <Stack direction="row" gap={3}>
                <Input
                  placeholder="Name"
                  variant="filled"
                  border={0}
                  color="gray.500"
                  _placeholder={{
                    color: "gray.200",
                  }}
                  _focus={{
                    border: 1,
                  }}
                  onChange={(e) => {
                    setNameForNID((prev) => ({
                      ...prev,
                      [nid]: e.target.value,
                    }));
                  }}
                />
                <Button
                  size="sm"
                  bgColor="green.500"
                  color="purple.50"
                  _hover={{ bgColor: "green.600" }}
                  rounded="full"
                >
                  Verify
                </Button>
              </Stack>
            </Flex>
          ))}
      </Stack>
    </Box>
  );
}
