import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContract, useAccount, useSigner } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import getWeb3Storage from "../../libs/web3.storage";
import { productSchema, type ProductSchema } from "../../schemas/productSchema";
import { STORE_CONTRACT_ADDRESS } from "../../configs/constants";
import storeABI from "../../abis/store.json";

export default function JoinOurTeam() {
  const toast = useToast();
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const web3Storage = getWeb3Storage();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ProductSchema>({
    resolver: yupResolver(productSchema),
  });

  const contract = useContract({
    address: STORE_CONTRACT_ADDRESS,
    abi: storeABI,
    signerOrProvider: signer,
  });

  const onSubmit = async (data: ProductSchema) => {
    try {
      const CID = await web3Storage.put([data.image]);
      const result = await contract?.functions.createProduct(
        data.name,
        data.price,
        CID
      );
      console.log({ result });
    } catch (error) {
      console.error({ error });
      toast({
        title: "Error",
        description: "Error uploading image",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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

        <Box as="form" mt={10} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl isInvalid={!!errors.name}>
              <Input
                id="name"
                placeholder="Product Name"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: "gray.500",
                }}
                {...register("name")}
              />
              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.price}>
              <Input
                type="number"
                placeholder="Product Price in USDC"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: "gray.500",
                }}
                {...register("price")}
              />
              {errors.price && (
                <FormErrorMessage>{errors.price.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.image}>
              <Input
                type="file"
                accept="image/*"
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
                onChange={(e) =>
                  setValue("image", e.target.files?.[0] ?? undefined)
                }
              />
              {errors.image && (
                <FormErrorMessage>
                  {errors.image.message?.toString()}
                </FormErrorMessage>
              )}
            </FormControl>
          </Stack>

          {address ? (
            <Button
              type="submit"
              mt={8}
              w="full"
              rounded="full"
              bgGradient="linear(to-r, pink.500, purple.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, pink.500)",
                fontWeight: 800,
              }}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          ) : (
            <Flex mt={3} justify="center">
              <ConnectButton />
            </Flex>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
