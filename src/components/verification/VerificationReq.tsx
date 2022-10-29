import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAtomValue } from "jotai";

import {
  verificationSchema,
  type VerificationData,
} from "../../schemas/verificationReqSchema";
import useEncryptVerificationData from "../../hooks/useEncryptVerificationData";
import { verificationAtom } from "../../atoms/verificationAtom";

type VerificationReqModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function VerificationReqModal({
  isOpen,
  onClose,
}: VerificationReqModalProps) {
  const { mutateAsync: encrypt, isLoading } = useEncryptVerificationData();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerificationData>({
    resolver: yupResolver(verificationSchema),
  });
  const encryptedData = useAtomValue(verificationAtom);

  const onSubmit = async (data: VerificationData) =>
    encrypt(data)
      .then(() => {
        console.log(encryptedData);
      })
      .finally(onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        bgColor="white"
        color="gray.900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalHeader>Get Verified</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction="column" gap={3}>
            <FormControl isInvalid={!!errors.nid}>
              <Input
                placeholder="NID Number"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: "gray.500",
                }}
                {...register("nid")}
              />
              {errors.nid && (
                <FormErrorMessage>{errors.nid.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.name}>
              <Input
                id="name"
                placeholder="Your Official Name"
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
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            rounded="full"
            colorScheme="red"
            variant="ghost"
            mr={3}
            color="red.500"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            bgColor="purple.500"
            color="purple.50"
            rounded="full"
            _hover={{ bgColor: "purple.600" }}
            isLoading={isLoading}
          >
            Request
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
