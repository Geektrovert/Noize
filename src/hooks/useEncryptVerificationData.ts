import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

import { VerificationData } from "../schemas/verificationReqSchema";
import { verificationAtom } from "../atoms/verificationAtom";

const encryptVerificationData = async (data: VerificationData) =>
  axios.post("/api/encrypt", data).then((res) => res.data);

export default function useEncryptVerificationData() {
  const toast = useToast();
  const setVerificationData = useSetAtom(verificationAtom);
  return useMutation(encryptVerificationData, {
    onSuccess: (data) => {
      console.log(data);
      setVerificationData(data);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
}
