import { useState } from "react";
import GameBoard from "./Component/GameBoard";
import Player from "./Component/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectedSquare() {
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer}/>
      </div>
      Log
    </main>
  );
}

export default App;
