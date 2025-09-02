import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, IsSetPlayerName] = useState(initialName);
    const [isEditing, IsSetEditing] = useState(false);

    function handleEditClick() {
        IsSetEditing((editing)=>!editing);
    }

    function handleOnchangeName(event) {
        IsSetPlayerName(event.target.value);
    }
    let editableName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';
    if (isEditing) {
        editableName = <input type="text" required value={playerName} onChange={handleOnchangeName}/>
        //btnCaption = 'Save';
    }
  return (
    <li>
      <span>
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing?'Save': 'Edit'}</button>
    </li>
  );
}
