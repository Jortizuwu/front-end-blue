import { useState, useCallback } from "react";

import { useExploreForm } from "./use-explore-form";
import { useGetMostLikeCharacter } from "@/shared/hooks/react-query/use-get-most-like";
import { useGetMostDislikeCharacter } from "@/shared/hooks/react-query/use-get-most-dislike";
import { useGetMostRecentReactionCharacter } from "@/shared/hooks/react-query/use-get-most-recent";

export type Mode = "search" | "most-like" | "most-dislike" | "recent";

export function useExploreMode() {
  const [mode, setMode] = useState<Mode>("search");

  const {
    search,
    isLoading: isSearching,
    data: searchResult,
  } = useExploreForm();

  const {
    data: mostLike,
    isLoading: isLoadingMostLike,
    refetch: refetchMostLike,
  } = useGetMostLikeCharacter({ enabled: false });

  const {
    data: mostDislike,
    isLoading: isLoadingMostDislike,
    refetch: refetchMostDislike,
  } = useGetMostDislikeCharacter({ enabled: false });

  const {
    data: mostRecent,
    isLoading: isLoadingMostRecent,
    refetch: refetchMostRecent,
  } = useGetMostRecentReactionCharacter({ enabled: false });

  const onSubmit = useCallback(
    async (values: { query: string }) => {
      setMode("search");
      await search(values.query);
    },
    [search]
  );

  const handleMostLike = useCallback(async () => {
    setMode("most-like");
    await refetchMostLike();
  }, [refetchMostLike]);

  const handleMostDislike = useCallback(async () => {
    setMode("most-dislike");
    await refetchMostDislike();
  }, [refetchMostDislike]);

  const handleMostRecent = useCallback(async () => {
    setMode("recent");
    await refetchMostRecent();
  }, [refetchMostRecent]);

  const isLoading =
    isSearching ||
    isLoadingMostLike ||
    isLoadingMostDislike ||
    isLoadingMostRecent;

  const character =
    mode === "search"
      ? searchResult
      : mode === "most-like"
      ? mostLike?.data
      : mode === "most-dislike"
      ? mostDislike?.data
      : mostRecent?.data;

  return {
    // state
    mode,
    isLoading,
    character,

    // actions
    onSubmit,
    handleMostLike,
    handleMostDislike,
    handleMostRecent,
  };
}
