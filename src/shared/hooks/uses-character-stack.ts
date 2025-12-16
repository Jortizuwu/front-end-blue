import { createContext, useContext } from "react";
import type { CharacterStackContextValue } from "../context/character-stack";

export const CharacterStackContext =
  createContext<CharacterStackContextValue | null>(null);

export function useCharacterStack() {
  const context = useContext(CharacterStackContext);

  if (!context) {
    throw new Error(
      "useCharacterStack must be used within CharacterStackProvider"
    );
  }

  return context;
}
