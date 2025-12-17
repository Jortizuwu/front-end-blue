import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Heart, ThumbsDown } from "lucide-react";
import type { Character } from "@/shared/interfaces/characters.model";
interface Props {
  character: Character;
}

function CardExplore({ character }: Props) {
  return (
    <Card className="overflow-hidden mt-4">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-2xl capitalize">{character.name}</CardTitle>
        <span className="text-sm text-muted-foreground">{character.type}</span>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            {character.likesCount}
          </div>
          <div className="flex items-center gap-2">
            <ThumbsDown className="w-4 h-4 text-blue-500" />
            {character.dislikesCount}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardExplore;
