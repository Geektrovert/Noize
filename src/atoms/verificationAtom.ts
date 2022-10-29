import { atom } from "jotai";

type VerificationState = {
  name: string;
  nid: string;
};

export const verificationAtom = atom<VerificationState | null>(null);
