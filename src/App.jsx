import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import { cards_data } from "./data.js"

let cards = cards_data.map(card_data =>
    <Card
        key={card_data.id}
        item={card_data}
    />
);

const App = () => <div className="app-container">
    <NavBar />
    <Hero />
    <section className="cards">
        {cards}
    </section>
</div>;

export default App;