import { useEffect, useState, useCallback, type ReactNode } from "react";

import { useGetRandomCharacter } from "@/shared/hooks/react-query/use-get-random-character";
import type { CardData } from "./character-stack.types";
import type { CharactersResponse } from "@/shared/interfaces/characters.model";
import { CharacterStackContext } from "@/shared/hooks/uses-character-stack";
import { useCreateCharacter } from "@/shared/hooks/react-query/use-create-character";

function mapToCard(response: CharactersResponse): CardData {
  return {
    id: response.data.id,
    customId: `${response.data.id}-${response.data.name}`,
    image: response.data.image,
    color: "#45ccf1",
    affirmation: response.data.name,
    type: response.data.origin,
  };
}

export function CharacterStackProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [lastRemovedCard, setLastRemovedCard] = useState<CardData | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const { createCharacter } = useCreateCharacter();

  const { refetch, isFetching } = useGetRandomCharacter({ enabled: false });

  const createCharacterAndReaction = useCallback(
    async (direction: "left" | "right") => {
      if (direction === "right" && lastRemovedCard) {
        {
          createCharacter({
            idExternalApi: lastRemovedCard.id,
            type: lastRemovedCard.type,
            reactionType: "LIKE",
          });
        }
      }

      if (direction === "left" && lastRemovedCard) {
        createCharacter({
          idExternalApi: lastRemovedCard.id,
          type: lastRemovedCard.type,
          reactionType: "UNLIKE",
        });
      }
    },
    [createCharacter, lastRemovedCard]
  );

  useEffect(() => {
    if (!initialLoad) return;

    const loadInitial = async () => {
      const r1 = await refetch();
      const r2 = await refetch();

      if (r1.data && r2.data) {
        setCards([mapToCard(r1.data), mapToCard(r2.data)]);
      }

      setInitialLoad(false);
    };

    loadInitial();
  }, [initialLoad, refetch]);

  const removeTopCard = useCallback(
    async (direction: "left" | "right") => {
      let removed: CardData | null = null;

      setCards((prev) => {
        if (prev.length === 0) return prev;

        removed = prev[prev.length - 1];
        return prev.slice(0, -1);
      });

      if (removed) {
        setLastRemovedCard(removed);
      }

      const { data } = await refetch();
      if (data) {
        setCards((prev) => [mapToCard(data), ...prev]);
      }

      createCharacterAndReaction(direction);
    },
    [refetch, createCharacterAndReaction]
  );

  return (
    <CharacterStackContext.Provider
      value={{
        cards,
        lastRemovedCard,
        isLoading: isFetching && cards.length === 0,
        removeTopCard,
      }}
    >
      {children}
    </CharacterStackContext.Provider>
  );
}
