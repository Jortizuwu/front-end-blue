export interface CharacterStackContextValue {
  cards: CardData[];
  isLoading: boolean;
  removeTopCard: () => void;
}
export interface CardData {
  id: string;
  image: string;
  color: string;
  affirmation?: string;
}
