import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
//   CardTitle,
} from "@/shared/components/ui/card";
import type { Reaction } from "@/shared/interfaces/user.model";

import { Heart, ThumbsDown } from "lucide-react";

export function ReactionCard({ item }: { item: Reaction }) {
  const isLike = item.reaction === "LIKE";

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="p-0">
        {/* <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover"
        /> */}
      </CardHeader>

      <CardContent className="pt-4 space-y-2">
        {/* <CardTitle className="text-lg">{item.name}</CardTitle> */}

        {/* <Badge variant="secondary">{item.origin}</Badge> */}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Badge
          variant={isLike ? "default" : "destructive"}
          className="flex items-center gap-1"
        >
          {isLike ? (
            <Heart className="h-4 w-4" />
          ) : (
            <ThumbsDown className="h-4 w-4" />
          )}
          {isLike ? "Like" : "Dislike"}
        </Badge>
      </CardFooter>
    </Card>
  );
}
