import React from "react";
import "./Todolist.css";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Todolist = ({
  todoData,
  removeTodo,
  editTodo,
  togglePopUp,

  timeShow,
}) => {
  const dateWithouthSecond = new Date();

  const displayTime = dateWithouthSecond.toLocaleTimeString(
    navigator.language,
    { hour: "2-digit", minute: "2-digit" }
  );
  // console.log(  dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))

  const isBackgroundRed = (task) => {
    if (displayTime > task.time) {
      return "red";
    }
    if (displayTime === task.time) {
      return "yellow";
    }
    if (displayTime < task.time) {
      return "green";
    }
  };

  return (
    <div>
      {todoData.map((task) => {
        return (
          <div key={task.id}>
            <div className="todolist">
              {/* check_box */}

              <input
                type="checkbox"
                className="check_box"
                onClick={timeShow}
              ></input>

              {/* task list  */}

              <p className="todo_text">{task.name}</p>
              {/* <p className="todo_text">{task.time}</p> */}

              {/* delete btn  */}

              <span onClick={() => removeTodo(task.id)}>
                <MdDelete className="delete-btn" />
              </span>

              {/* edit btn  */}

              <span onClick={() => editTodo(task)}>
                <AiFillEdit
                  // onClick={() => setshowEdit()}
                  onClick={() => togglePopUp()}
                  className="edit-btn"
                />
              </span>

              <div className={isBackgroundRed(task)}></div>

              {/* <Time/> */}

              <p></p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
