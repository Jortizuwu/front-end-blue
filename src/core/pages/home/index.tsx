import { CardStack } from "@/shared/components/swiper/components/card-stack";
import { useCharacterStack } from "@/shared/context/character-stack";

function HomePage() {
  const { cards, isLoading } = useCharacterStack();

  if (isLoading) return <div>Loading...</div>;

  return <CardStack cards={cards} />;
}

export default HomePage;
