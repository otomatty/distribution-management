import { atom } from "jotai";
import { User as CustomUser } from "@/types/user";
import { Session } from "@supabase/supabase-js";

export interface UserState {
  user: CustomUser | null;
  session: Session | null;
}

export const userAtom = atom<UserState>({ user: null, session: null });
