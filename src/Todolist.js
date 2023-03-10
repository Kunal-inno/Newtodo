import React from "react";
import "./Todolist.css"
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
// import Time from "./Time";
// import PopUp from "./PopUp";

const Todolist = ({todoData,removeTodo,editTodo,setshowEdit,timeShow}) => {


 
  return (
    <div >
      {todoData.map((task) => {
        return (
          <div  key={task.id}>
            <div className="todolist">

              {/* check_box */}

              <input type="checkbox" className="check_box" onClick={timeShow}></input>

              {/* task list  */}

              <p className="todo_text">{task.name}</p>

              {/* delete btn  */}

              <span onClick={() => removeTodo(task.id)}>
              <MdDelete className="delete-btn" />
              </span>

              {/* edit btn  */}

              <span onClick={()=> editTodo(task)} >
              <AiFillEdit onClick={() => setshowEdit()} className="edit-btn" />
              </span>

              {/* TIME  */}
              
              <div className="work_delay_teller">

              </div>


              {/* <Time/> */}
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Todolist;
