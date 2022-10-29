import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type PendingVerification = {
  index: number;
  nid: string;
};

const getPendingVerifications = async () =>
  axios.get("/api/decrypt").then((res) => res.data);

export default function usePendingVerifications() {
  return useQuery<any, any, PendingVerification[]>(
    ["pendingVerifications"],
    getPendingVerifications,
    {
      onError: (error) => console.log(error),
      onSuccess: (data) => console.log(data),
    }
  );
}
