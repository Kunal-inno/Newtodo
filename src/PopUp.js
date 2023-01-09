import React, { useState } from "react";
import "./PopUp.css";

const PopUp = ({ AddInput, editItem, EditInput, cancleBtn }) => {
  const [inputData, setInputData] = useState(
    editItem
      ? // ? editItem.name
        {
          time: editItem.time,
          date: editItem.date,
          input: editItem.name,
        }
      : {
          time: "",
          date: "",
          input: "",
        }
  );

  console.log(inputData);

  return (
    <div className="popUpwraper">
      <div>
        <h2>Add todo</h2>
        <div className="btn-div">
          <input
            type="time"
            name="time"
            required
            value={inputData.time}
            onChange={(e) =>
              setInputData({ ...inputData, time: e.target.value })
            }
          ></input>

          <input
            type="date"
            id="start-date"
            name="date"
            onChange={(e) =>
              setInputData({ ...inputData, date: e.target.value })
            }
            value={inputData.date}
          ></input>
        </div>

        <input
          type="text"
          placeholder="Add your task."
          className="input-area"
          value={inputData.input}
          name="input"
          onChange={(e) =>
            setInputData({ ...inputData, input: e.target.value })
          }
        ></input>

        <div className="btn-div">
          <button
            onClick={() =>
              editItem
                ? EditInput({
                    ...editItem,
                    name: inputData.input,
                    date: inputData.date,
                    time: inputData.time,
                  })
                : AddInput(inputData)
            }
          >
            Done
          </button>
          <button
            className="close-btn"
            onClick={() => {
              cancleBtn();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
