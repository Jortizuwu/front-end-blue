import { useEffect, useState, useCallback, type ReactNode } from "react";

import { useGetRandomCharacter } from "@/shared/hooks/react-query/use-get-random-character";
import type { CardData } from "./character-stack.types";
import type { CharactersResponse } from "@/shared/interfaces/characters.model";
import { CharacterStackContext } from "@/shared/hooks/uses-character-stack";
import { useCreateCharacter } from "@/shared/hooks/react-query/use-create-character";

function mapToCard(response: CharactersResponse): CardData {
  return {
    id: response.data.id,
    customId: `${response.data.id}-${response.data.name}-${response.data.origin}`,
    image: response.data.image,
    color: "#45ccf1",
    name: response.data.name,
    type: response.data.origin,
  };
}

export function CharacterStackProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const { createCharacter } = useCreateCharacter();

  const { refetch, isFetching } = useGetRandomCharacter({ enabled: false });

  const createCharacterAndReaction = useCallback(
    async (direction: "left" | "right", lastRemovedCard: CardData) => {
      if (direction === "right" && lastRemovedCard) {
        {
          createCharacter({
            idExternalApi: lastRemovedCard.id,
            type: lastRemovedCard.type,
            reactionType: "LIKE",
            name: lastRemovedCard.name || "",
            image: lastRemovedCard.image,
          });
        }
      }

      if (direction === "left" && lastRemovedCard) {
        createCharacter({
          idExternalApi: lastRemovedCard.id,
          type: lastRemovedCard.type,
          reactionType: "UNLIKE",
          name: lastRemovedCard.name || "",
          image: lastRemovedCard.image,
        });
      }
    },
    [createCharacter]
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
      setCards((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(0, -1);
      });

      const topCard = cards[0];
      if (topCard) {
        await createCharacterAndReaction(direction, topCard);
      }

      const { data } = await refetch();
      if (data) {
        setCards((prev) => [mapToCard(data), ...prev]);
      }
    },
    [refetch, createCharacterAndReaction, cards]
  );

  return (
    <CharacterStackContext.Provider
      value={{
        cards,
        isLoading: isFetching && cards.length === 0,
        removeTopCard,
      }}
    >
      {children}
    </CharacterStackContext.Provider>
  );
}
