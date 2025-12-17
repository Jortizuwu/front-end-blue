import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const MAP_TYPES = {
  POKEMON: "Pokemon",
  RICK_AND_MORTY: "Rick and Morty",
  SUPER_HERO: "Super hero",
};