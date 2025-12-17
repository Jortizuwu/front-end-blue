import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heart, ThumbsDown, Clock } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";

import CardExplore from "./card";
import { exploreSchema } from "./utils/schema";
import { useExploreMode } from "./utils/use-explore-mode";

function FormExplore() {
  const form = useForm({
    defaultValues: { query: "" },
    resolver: zodResolver(exploreSchema),
    mode: "all",
  });

  const {
    onSubmit,
    handleMostLike,
    handleMostDislike,
    handleMostRecent,
    character,
    isLoading,
    mode,
  } = useExploreMode();

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

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Buscando..." : "Buscar"}
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

        <Button
          className="flex-1"
          variant={mode === "recent" ? "secondary" : "outline"}
          onClick={handleMostRecent}
        >
          <Clock className="mr-2 h-4 w-4" />
          Reciente
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
