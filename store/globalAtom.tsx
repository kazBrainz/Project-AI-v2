import { atomWithStorage } from "jotai/utils";

export const isAuthenticatedAtom = atomWithStorage('ai_isauthenticated', true);