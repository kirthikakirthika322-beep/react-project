import "./App.css";
import Card from "./card";

import img1 from "./assets/img1.avif";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.jpg";

function App() {
  const cards = [
    {
      title: "CONSOLE",
      image: img1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "PALYGROUND",
      image: img2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "ADVENTURE",
      image: img3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container">
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            image={card.image}
            description={card.description}
          />
        );
      })}
    </div>
  );
}
export default App;