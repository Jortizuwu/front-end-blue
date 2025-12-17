import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { exploreSchema } from "./utils/schema";
import { useExploreForm } from "./utils/use-explore-form";
import CardExplore from "./card";
import { Heart, ThumbsDown } from "lucide-react";
import { useGetMostDislikeCharacter } from "@/shared/hooks/react-query/use-get-most-dislike";
import { useGetMostLikeCharacter } from "@/shared/hooks/react-query/use-get-most-like";
import { useState } from "react";

type Mode = "search" | "most-like" | "most-dislike";

function FormExplore() {
  const [mode, setMode] = useState<Mode>("search");

  const form = useForm({
    defaultValues: { query: "" },
    resolver: zodResolver(exploreSchema),
    mode: "all",
  });

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

  const onSubmit = async (values: { query: string }) => {
    setMode("search");
    await search(values.query);
  };

  const handleMostLike = async () => {
    setMode("most-like");
    await refetchMostLike();
  };

  const handleMostDislike = async () => {
    setMode("most-dislike");
    await refetchMostDislike();
  };

  const isLoading = isSearching || isLoadingMostLike || isLoadingMostDislike;

  const character =
    mode === "search"
      ? searchResult
      : mode === "most-like"
      ? mostLike?.data
      : mostDislike?.data;

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="search"
                    placeholder="Busca un personaje"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSearching}>
            {isSearching ? "Buscando..." : "Buscar"}
          </Button>
        </form>
      </Form>

      <div className="flex gap-2">
        <Button
          className="flex-1"
          variant={mode === "most-like" ? "default" : "outline"}
          onClick={handleMostLike}
        >
          <Heart className="mr-2 h-4 w-4" />
          Más likes
        </Button>

        <Button
          className="flex-1"
          variant={mode === "most-dislike" ? "destructive" : "outline"}
          onClick={handleMostDislike}
        >
          <ThumbsDown className="mr-2 h-4 w-4" />
          Más dislikes
        </Button>
      </div>

      {isLoading && (
        <p className="text-center text-muted-foreground">Cargando...</p>
      )}

      {!isLoading && character && <CardExplore character={character} />}
    </div>
  );
}

export default FormExplore;
