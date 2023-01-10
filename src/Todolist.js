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
  // for date

  const dateObj = new Date();
  // const month = dateObj.getUTCMonth() + 1; //months from 1-12
  // const day = dateObj.getUTCDate();
  // const year = dateObj.getUTCFullYear();

  // const newdate = year + month + day;
  // console.log(newdate);

  // const compareDate = new Date(year, month, day);
  // console.log(compareDate);

  const isBackgroundRed = (task) => {
    const currentDateTimestamp = dateObj.getTime();
    const taskDateTimestamp = new Date(task.date).getTime();
    
    
    const timeDifference = Math.abs(currentDateTimestamp - taskDateTimestamp);
    const isWithin24Hours = timeDifference > 0 && timeDifference <= 86400000;
    
    if (currentDateTimestamp > taskDateTimestamp) {
      return "red";
    }
    if (isWithin24Hours) {
      return "yellow";
    }
    if (currentDateTimestamp < taskDateTimestamp) {
      return "green";
    }
  };

  // const isBackgroundRed = (task) => {

  //   const currentDateTimestamp = dateObj.getTime();
  //   console.log(currentDateTimestamp)
    
  //   const taskDateTimestamp = new Date(task.date).getTime();
  //   console.log(taskDateTimestamp)


  //   if (currentDateTimestamp > taskDateTimestamp) {
  //     return "red";
  //   }
  //   if (currentDateTimestamp === taskDateTimestamp) {
  //     return "yellow";
  //   }
  //   if (currentDateTimestamp < taskDateTimestamp) {
  //     return "green";
  //   }
  // };

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
// for time
// const dateWithouthSecond = new Date();

// const displayTime = dateWithouthSecond.toLocaleTimeString(
//   navigator.language,
//   { hour: "2-digit", minute: "2-digit" }
// );
// console.log(  dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))

// const month = dateObj.getUTCMonth() + 1; //months from 1-12
// const day = dateObj.getUTCDate();
// const year = dateObj.getUTCFullYear();

// const newdate = year+  month  + day;
// console.log(newdate);

// const compareDate = new Date(year, month,day);
// console.log(compareDate)


// const yellowCompare= (taskDateTimestamp + 86300000)