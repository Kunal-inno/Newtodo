import React, { useState } from "react";
import "./PopUp.css";
// import Time from "./Time";

const PopUp = ({ AddInput, editItem, EditInput, cancleBtn, cancleBtnEdit }) => {
  const [inputData, setInputData] = useState(
    editItem
      ? editItem.name 
      : {
          time: "",
          date: "",
          input: "",
        }
      // ""
  );
  // const [inputName, setInputName] = useState([inputData.time]);

  console.log(inputData)
  // console.log(inputName)


  return (
    <div className="popUpwraper">
      <div>
        <h2>Add todo</h2>
        <div className="btn-div">
          {/* <div onChange={(e) => setInputData(e.target.value)}> */}
          <input
            type="time"
            name="time"
            required
            value={inputData.time}
            onChange={(e) => setInputData({...inputData, time: e.target.value})}
          ></input>

          <input
            type="date"
            id="start-date"
            name="date"
            onChange={(e) => setInputData({...inputData, date: e.target.value})}
            value={inputData.date}
          ></input>
        </div>
        
        <input
          type="text"
          placeholder="Add your task."
          className="input-area"
          value={inputData.input}
          name="input"
          onChange={(e) => setInputData({...inputData, input: e.target.value })}
        ></input>
        

        <div className="btn-div">
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
            Close
          </button>
        </div>

        {/* <input type="time"  name="appt" value={inputTime}
        onChange={(e)=>setInputTime(e.target.value)}
       min="00:00" max="24:00" required ></input> */}

        {/* <Time/> */}
      </div>
    </div>
  );
};

export default PopUp;
