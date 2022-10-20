import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

const cards_data = [
    {
        front_image: require("./images/card/front-1.png"),
        status: "sold out",
        mark_val: "5.0",
        mark_amount: "6",
        country: "USA",
        price: "$136",
        description: "Life lessons with Katie Zaferes",
    },
    {
        front_image: require("./images/card/front-2.png"),
        status: "online",
        mark_val: "5.0",
        mark_amount: "30",
        country: "USA",
        price: "$125",
        description: "Learn wedding photography",
    },
    {
        front_image: require("./images/card/front-3.png"),
        status: "online",
        mark_val: "4.8",
        mark_amount: "2",
        country: "USA",
        price: "$50",
        description: "Group Mountain Biking",
    },
];

let cards = [];
cards_data.forEach(function (card_data) {
    cards.push(<Card
        front_image={card_data.front_image}
        status={card_data.status}
        mark_val={card_data.mark_val}
        mark_amount={card_data.mark_amount}
        country={card_data.country}
        price={card_data.price}
        description={card_data.description}
    />);
});

const App = () => <div className="app-container">
    <NavBar />
    <Hero />
    <div className="cards">
        {cards}
    </div>
</div>;

export default App;