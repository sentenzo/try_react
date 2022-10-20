import { journeys as journeys_data } from "./data"
import NavBar from "./components/NavBar";
import Article from "./components/Article";

const journeys = journeys_data.map(item => {
    // const picture_url = require(`${}`)
    return <Article
        key={item.id}
        data={item}
    />
});
const App = () => <div id="react_app">
    <NavBar />
    <main>
        {journeys}
    </main>
</div>;

export default App;