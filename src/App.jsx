import Gameboard from "./components/Gameboard";

const App = () => <div id="react-app" className="">
    <div className="container">
        <div className="info">
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click
                each die to freeze it at its current value
                between rolls.</p>
        </div>
        <Gameboard />
    </div>
</div>;

export default App;