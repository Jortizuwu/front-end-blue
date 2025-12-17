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

function FormExplore() {
  const form = useForm({
    defaultValues: { query: "" },
    resolver: zodResolver(exploreSchema),
    mode: "all",
  });

  const { search, isLoading, data } = useExploreForm();

  const onSubmit = async (values: { query: string }) => {
    await search(values.query);
  };

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-2 w-full"
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
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

          <Button
            type="submit"
            className="disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Buscando..." : "Buscar"}
          </Button>
        </form>
      </Form>
      <div className="flex gap-2 mt-4">
        <Button className="flex-1">
          <Heart className="mr-2 h-4 w-4" />
           buscar por mas like
        </Button>
        <Button variant="outline" className="flex-1">
          <ThumbsDown className="mr-2 h-4 w-4" />
          buscar por mas Dislike
        </Button>
      </div>
      {data && <CardExplore character={data} />}
    </div>
  );
}

export default FormExplore;
