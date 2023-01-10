import React, { useState } from "react";
import Header from "./Header";
import PopUp from "./PopUp";
import Todolist from "./Todolist";
import "./App.css";

const local_Api = [
  { id: 0, name: "Book flight", time: "", date: "", check: true },
  { id: 1, name: "Book hotel", time: "", date: "", check: true },
  { id: 2, name: "Book cab", time: "", date: "", check: false },
];
const App = () => {
  const [show, setshow] = useState(false);
  const setShowPop = () => {
    setshow(!show);
  };

  // add portion

  const [todos, settodos] = useState(local_Api);

  const AddInput = (inputData) => {
    settodos([
      ...todos,
      {
        id: todos.length + 1,
        name: inputData.input,
        check: false,
        date: inputData.date,
        time: inputData.time,
      },
    ]);
    

    setshow(false);
  };

  // delete portion

  const removeTodo = (id) => {
    const newlist = todos.filter((todos) => todos.id !== id);
    settodos(newlist);
  };

  // edit portion
  const [editItem, seteditItem] = useState(null);

  const editTodo = (task) => {
    seteditItem(task);
  };

  // EDIT INPUT DATA

  const EditInput = (editItem) => {
    const index = todos.findIndex((Object) => {
      return Object.id === editItem.id;
    });
    console.log(index);

    const updatedTodos = todos.map((todo) => {
      if (todo.id === editItem.id) {
        return editItem;
      }
      return todo;
    });

    settodos(updatedTodos);
  };

  // cancle button of add todo

  const cancleBtn = () => {
    setshow(false);
  };

  // time function

  return (
    <>
      <div className="parent_Div">
        <Header togglePopUp={setShowPop} />
        <Todolist
          todoData={todos}
          removeTodo={removeTodo}
          AddInput={AddInput}
          editTodo={editTodo}
          togglePopUp={setShowPop}
        />
      </div>

      {show && (
        <PopUp
          AddInput={AddInput}
          cancleBtn={cancleBtn}
          EditInput={EditInput}
          editItem={editItem}
        />
      )}

      {/* <Time/> */}
    </>
  );
};

export default App;
