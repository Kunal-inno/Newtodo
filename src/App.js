import React, { useState } from "react";
import Header from "./Header";
import PopUp from "./PopUp";
import Todolist from "./Todolist";
import "./App.css";

const local_Api = [
  { id: 0, name: "Book flight", check: true },
  { id: 1, name: "Book hotel", check: true },
  { id: 2, name: "Book cab", check: false },
];
const App = () => {
  const [show, setshow] = useState(false);
  const setShowPop = () => {
    setshow(!show);
  };

  // add portion

  const [todos, settodos] = useState(local_Api);

  const AddInput = (inputData) => {
    settodos([...todos, { id: Math.random(), name: inputData, check: false }]);
  };

  // delete portion

  const removeTodo = (id) => {
    const newlist = todos.filter((todos) => todos.id !== id);
    settodos(newlist);
  };

  // edit pop up

  // const [showEditPop, setshowEditPop] = useState(false);
  const setshowEdit = () => {
    setshow(!show);
  };

  // edit portion
  const [editItem, seteditItem] = useState(null);

  const editTodo = (task) => {
    seteditItem(task);
    // setInputData(task.name)
  };

  // EDIT INPUT DATA

  const EditInput = (editItem) => {
    // let update = todos.splice(todos.indexOf(editItem.id), 0, editItem);
    const index = todos.findIndex((Object) => {
      return Object.id === editItem.id;
    });
    console.log(index);
    console.log(editItem);

    todos[index] = editItem;
    console.log(todos);
    settodos([...todos]);
  };

  const timeShow = () => {};

  // cancle button of add todo

  const cancleBtn = () => {
    setshow(false);
  };

  // cancle button of edit todo

  const cancleBtnEdit = () => {
    setshow(false);
  };

  return (
    <>
      <div className="parent_Div">
        <Header togglePopUp={setShowPop} />
        <Todolist
          todoData={todos}
          removeTodo={removeTodo}
          AddInput={AddInput}
          editTodo={editTodo}
          setshowEdit={setshowEdit}
          timeShow={timeShow}
        />
      </div>

      {show && (
        <PopUp
          AddInput={AddInput}
          cancleBtn={cancleBtn}
          EditInput={EditInput}
          cancleBtnEdit={cancleBtnEdit}
          editItem={editItem}
        />
      )}

      {/* <Time/> */}
    </>
  );
};

export default App;
