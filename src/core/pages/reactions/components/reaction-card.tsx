import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { Reaction } from "@/shared/interfaces/user.model";

import { Heart, ThumbsDown } from "lucide-react";

const MAP_TYPES = {
  POKEMON: "Pokemon",
  RICK_AND_MORTY: "Rick and Morty",
  SUPER_HERO: "Super hero",
};

export function ReactionCard({ item }: { item: Reaction }) {
  const isLike = item.reaction === "LIKE";

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader>
        <img
          src={item.character.image}
          alt={item.character.name}
          className="h-48 w-full object-cover rounded-2xl"
        />
      </CardHeader>

      <CardContent className="pt-4 space-y-2">
        <CardTitle className="text-lg">{item.character.name}</CardTitle>

        <Badge variant="secondary">{MAP_TYPES[item.character.type]}</Badge>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Badge
          variant={isLike ? "default" : "destructive"}
          className="flex items-center gap-2 px-3 py-1"
        >
          {isLike ? (
            <Heart className="h-4 w-4" />
          ) : (
            <ThumbsDown className="h-4 w-4" />
          )}

          <span className="font-medium">{isLike ? "Like" : "Dislike"}</span>

          <span className="text-xs opacity-80">
            • global{" "}
            {isLike ? item.character.likesCount : item.character.dislikesCount}
          </span>
        </Badge>
      </CardFooter>
    </Card>
  );
}
