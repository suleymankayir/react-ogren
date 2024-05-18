import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../App.css";
import { useState } from "react";

function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);

  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
        id : id,
        content : newTodo
    }
    onUpdateTodo(request);
    setEditable(false)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "rgba(220,220,220,0.5)",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? <input style={{width:"380px"}} value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className="todo-input" type="text" /> : content}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo}/>
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default ToDo;
