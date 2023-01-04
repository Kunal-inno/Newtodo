import React, { useState } from "react";
import "./PopUp.css";
import Time from "./Time";

const PopUp = ({ AddInput,editItem,EditInput,cancleBtn} ) => {
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
        <button className="close-btn" onClick={()=>cancleBtn()} >X</button>
        
      <Time/>
      </div>
      
    </div>
  );
};

export default PopUp;
