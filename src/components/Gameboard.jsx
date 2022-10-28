// import React from "react";

// const rows_count = 2
// const columns_count = 5;
// const total_count = rows_count * columns_count

// // const rand_dice = () => Math.ceil(Math.random() * 6)

// function* rand_dice_generator(count) {
//     while (count) {
//         count -= 1;
//         yield Math.ceil(Math.random() * 6);
//     }
// }

// const init_game_state = {
//     score: [...rand_dice_generator(total_count)],
//     lock: Array(total_count).fill(false),
// }

// console.log(init_game_state)



// const Gameboard = () => {
//     const [game_state, set_game_state] = React.useState(init_game_state);
//     // const [locks, set_locks] = React.useState(init_game_state);

//     const make_block = i => <div
//         className={game_state.lock[i] ? "block lock" : "block"}
//     >
//         {game_state.score[i]}
//     </div>

//     function make_blocks() {
//         const blocks = [];
//         let row = null;
//         for (let i = 0; i < total_count; i += 1) {
//             if (row === null) {
//                 row = [];
//             }

//             row.push(make_block(i));
//             if (row.length === columns_count) {
//                 blocks.push(<div className="row">
//                     {row}
//                 </div>);
//                 row = null;
//             }
//         }
//         return blocks;
//     }

//     return <div className="gameboard">
//         {make_blocks()}
//         <button>Roll</button>
//     </div>
// }

// export default Gameboard;