import {useState} from 'react';

export default function Player({symbol,name}){
  const [isEditing, setIsEditing] = useState(false);

  //this function causes react to re-execute the entire component function
  function handleEditClick(){
    //has a couple of flaws, because its complex
    setIsEditing(!isEditing);
    // setIsEditing(isEditing ? false : true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing){
    playerName = <input type="text" required/>
  }
  return(
    <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
          </li>
  );

}