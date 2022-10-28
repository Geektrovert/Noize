import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.png";

const Links = [
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "Create",
    url: "/create",
  },
];

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
  <ChakraLink
    as={Link}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      fontWeight: 800,
    }}
    href={url}
  >
    {children}
  </ChakraLink>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgColor="rgba(0, 0, 0, 0.5)"
      backdropFilter="saturate(180%) blur(5px)"
      px={4}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box as={Link} href="/" display={{ base: "none", lg: "block" }}>
          <Image src={logo} alt="Noize Logo" />
        </Box>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map(({ title, url }) => (
              <NavLink key={url} url={url}>
                {title}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <ConnectButton />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map(({ title, url }) => (
              <NavLink key={url} url={url}>
                {title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
