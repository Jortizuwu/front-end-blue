import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Heart, ThumbsDown } from "lucide-react";
import type { Character } from "@/shared/interfaces/user.model";

interface Props {
  character?: Character;
}

function ReactionExplorePage({ character }: Props) {
  if (!character) {
    return (
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-center">No character selected</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Input placeholder="Search character..." />

      <Card className="overflow-hidden">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-2xl capitalize">
            {character.name}
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {character.type}
          </span>
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

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <ThumbsDown className="mr-2 h-4 w-4" />
              Dislike
            </Button>

            <Button className="flex-1">
              <Heart className="mr-2 h-4 w-4" />
              Like
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReactionExplorePage;
