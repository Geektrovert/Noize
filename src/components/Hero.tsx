import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FiKey, FiHexagon, FiRewind } from "react-icons/fi";

export default function CallToActionWithVideo() {
  return (
    <Flex
      w="100vw"
      px={{ base: 4, lg: 18, xl: 24 }}
      py={{ base: 8 }}
      justify={{ base: "center", lg: "space-between" }}
      align="center"
      wrap="wrap"
    >
      <Stack spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          textAlign={{ base: "center", lg: "left" }}
          color="purple.50"
        >
          <Text
            as="span"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
          >
            Let your work make some noize!
          </Text>
          <br />
          <Text as="span" fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}>
            and most importantly, get paid directly!
          </Text>
        </Heading>

        {/* Add features/USP */}
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Button
            rounded="full"
            size="lg"
            fontWeight="normal"
            _hover={{ fontWeight: 600 }}
            px={6}
          >
            Create
          </Button>
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            bgColor="purple.500"
            _hover={{ bgColor: "purple.600", fontWeight: 600 }}
          >
            Explore
          </Button>
        </Stack>

        <Stack spacing={2} direction="column" fontSize="md">
          {[
            {
              icon: FiHexagon,
              text: "Trustless P2P marketplace",
            },
            {
              icon: FiKey,
              text: "Anonymous yet verified profiles",
            },
            {
              icon: FiRewind,
              text: "Carbon offseting made easy",
            },
          ].map(({ icon, text }, idx) => (
            <Stack key={idx} spacing={2} direction="row" align="center">
              <Flex
                bgColor="purple.500"
                color="gray.50"
                boxSize="1.5rem"
                rounded="full"
                align="center"
                justify="center"
              >
                <Icon as={icon} />
              </Flex>
              <Text color="gray.200">{text}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Image
        alt={"Hero Image"}
        fit="cover"
        align="center"
        w={{ base: "30vh", lg: "auto" }}
        h={{
          base: "30vh",
          lg: "80vh",
        }}
        src="/hero.avif"
        rounded="xl"
      />
    </Flex>
  );
}
