import React, { useState } from "react";
import "./PopUp.css";

const PopUp = ({ AddInput,editItem,EditInput} ) => {
  const [inputData, setInputData] = useState(editItem ? editItem.name : "");

  console.log(editItem)


  return (
    <div className="popUpwraper">
      <div>
        <h2>Add todo</h2>
        <input
          type="text"
          placeholder="Add your task."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <button onClick={()=> editItem ? EditInput({ ...editItem, name: inputData}) :  AddInput(inputData)}>Done</button>
      </div>
      
    </div>
  );
};

export default PopUp;
