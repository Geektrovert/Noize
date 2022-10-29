import { atom } from "jotai";

type VerificationState = {
  hashName: string;
  encryptNID: string;
};

export const verificationAtom = atom<VerificationState | null>(null);
