import React, { useState } from "react";
import "./PopUp.css";
// import Time from "./Time";

const PopUp = ({ AddInput, editItem, EditInput, cancleBtn, cancleBtnEdit }) => {
  const [inputData, setInputData] = useState(editItem ? editItem.name : "");
  // const [inputTime, setInputTime] = useState("");

  return (
    <div className="popUpwraper">
      <div>
        <h2>Add todo</h2>
        <div onChange={(e) => setInputData(e.target.value)}>
        <input type="time"  name="appt" 
        
        min="00:00" max="24:00" required ></input>
        <input
          type="text"
          placeholder="Add your task."
          value={inputData}
          // onChange={(e) => setInputData(e.target.value)}
        ></input>


        </div>



        <button
          onClick={() =>
            editItem
              ? EditInput({ ...editItem, name: inputData })
              : AddInput(inputData)
          }
        >
          Done
        </button>
        <button
          className="close-btn"
          onClick={() => {
            cancleBtn();
            cancleBtnEdit();
          }}
        >
          X
        </button>

        {/* <input type="time"  name="appt" value={inputTime}
        onChange={(e)=>setInputTime(e.target.value)}
       min="00:00" max="24:00" required ></input> */}

        {/* <Time/> */}
      </div>
    </div>
  );
};

export default PopUp;
