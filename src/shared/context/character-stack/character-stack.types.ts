import type { CardData } from "@/shared/components/swiper/components/utils/use-card-stack";

export interface CharacterStackContextValue {
  cards: CardData[];
  isLoading: boolean;
  removeTopCard: () => void;
}
