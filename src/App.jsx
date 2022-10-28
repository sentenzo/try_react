
import React from "react";
import Die from "./components/Die";

import Confetti from 'react-confetti'

const rand_dice = () => Math.ceil(Math.random() * 6)

// function* rand_dice_generator(count) {
//     while (count) {
//         count -= 1;
//         yield rand_dice();
//     }
// }

const App = () => {

    const new_state = () =>
        [...Array(10).keys()].map(id => ({
            id: id,
            value: rand_dice(),
            locked: false
        }));

    const [game_state, set_game_state] = React.useState(new_state());

    function is_tenzies() {
        return game_state.every(e => e.locked && e.value === game_state[0].value);
        // let vals = game_state.filter(e => e.locked).map(e => e.value);
        // console.log(vals);
        // if (vals.length === 10) {
        //     return (new Set(vals)).size === 1;
        // } else {
        //     return false;
        // }

    }
    const [tenzies, set_tenzies] = React.useState(is_tenzies());
    // const [new_ga]

    React.useEffect(() => {
        set_tenzies(is_tenzies);
    }, [game_state, is_tenzies]);

    React.useEffect(() => {
        if (tenzies) {
            console.log("You won!");
            // set_game_state(new_state());
        }
    }, [tenzies])

    const on_die_clicked_func = (die_id) => (e) => {
        e.preventDefault();

        set_game_state(old =>
            old.map(obj => {
                if (obj.id === die_id) {
                    return { ...obj, locked: !obj.locked }
                } else {
                    return obj
                }
            }));
    };

    function dice() {
        return game_state.map(obj =>
            <Die
                key={obj.id}
                value={obj.value}
                locked={obj.locked}
                on_die_clicked={on_die_clicked_func(obj.id)}
            />);
    };

    function reroll(e) {
        e.preventDefault();
        set_game_state(old =>
            old.map(die =>
            ({
                ...die,
                value: die.locked ? die.value : rand_dice()
            })))
        if (tenzies) {
            set_game_state(new_state());
        }
        // if (is_tenzies()) {
        //     set_game_state(new_state());
        // }
        // console.log(game_state)
    };
    // const { width, height } = useWindowSize()
    return <main id="react-app" className="">
        <div className="container">
            <div className="info">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click
                    each die to freeze it at its current value
                    between rolls.</p>
            </div>
            <div className="gameboard">
                {dice()}
            </div>
            <button
                onClick={reroll}
            >
                {tenzies ? "Ply again" : "Roll"}
            </button>
        </div>
        {tenzies && <Confetti
            // width={width}
            // height={height}
            gravity={0.3}
            recycle={false}
            numberOfPieces={200}
        />}
    </main>
};

export default App;