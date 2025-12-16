import { useEffect, useState, useCallback, type ReactNode } from "react";

import { useGetRandomCharacter } from "@/shared/hooks/react-query/use-get-random-character";
import type { CardData } from "./character-stack.types";
import type { CharactersResponse } from "@/shared/interfaces/characters.model";
import { CharacterStackContext } from "@/shared/hooks/uses-character-stack";

function mapToCard(response: CharactersResponse): CardData {
  return {
    id: response.data.id,
    image: response.data.image,
    color: "#45ccf1",
    affirmation: response.data.name,
  };
}

export function CharacterStackProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const { refetch, isFetching } = useGetRandomCharacter({ enabled: false });

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

  const removeTopCard = useCallback(async () => {
    setCards((prev) => prev.slice(0, -1));

    const { data } = await refetch();
    if (data) {
      setCards((prev) => [mapToCard(data), ...prev]);
    }
  }, [refetch]);

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
