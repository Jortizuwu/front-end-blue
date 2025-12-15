import { CardStack } from "@/shared/components/swiper/components/card-stack";

function HomePage() {
  const cards = [
    {
      id: 1,
      image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
      color: "#55ccff",
      affirmation: "Keep going!",
    },
    {
      id: 2,
      image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
      color: "#e8e8e8",
      affirmation: "You can do it!",
    },
    {
      id: 3,
      image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
      color: "#0a043c",
      affirmation: "Almost there!",
    },
  ];
  return <CardStack cards={cards} />;
}

export default HomePage;
