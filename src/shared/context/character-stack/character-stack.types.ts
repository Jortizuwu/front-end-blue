import type { TargetType } from "@/shared/interfaces/characters.model";

export interface CharacterStackContextValue {
  cards: CardData[];
  isLoading: boolean;
  lastRemovedCard: CardData | null;
  removeTopCard: (direction: "left" | "right") => void;
}
export interface CardData {
  id: string;
  image: string;
  customId: string;
  color: string;
  affirmation?: string;
  type: TargetType;
}
