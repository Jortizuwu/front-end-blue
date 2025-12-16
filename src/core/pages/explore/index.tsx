import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Heart, ThumbsDown } from "lucide-react";

function ReactionExplorePage() {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Input placeholder="Search character..." />

      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-center text-xl">Character Name</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="w-full aspect-auto rounded-md bg-muted flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Character"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex w-full gap-2">
            <Button variant="outline" className="flex-1 gap-2">
              <ThumbsDown className="h-4 w-4" />
              Dislike
            </Button>

            <Button className="flex-1 gap-2">
              <Heart className="h-4 w-4" />
              Like
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReactionExplorePage;
