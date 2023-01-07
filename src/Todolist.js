import React from "react";
import "./Todolist.css";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Todolist = ({
  todoData,
  removeTodo,
  editTodo,
  togglePopUp, 
  // setshowEdit,
  timeShow,
}) => {
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
              <p className="todo_text">{task.time}</p>
              <p className="todo_text">{task.date}</p>

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

              <div className="work_delay_teller"></div>

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
