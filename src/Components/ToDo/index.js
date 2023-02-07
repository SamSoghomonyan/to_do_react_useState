import React, { useState } from "react";
import edit from "./../../images/edit.svg";
import deleteIcon from "./../../images/delete.svg";
function ToDo({ title, id, handleDelete, handle }) {
  const [editClick, setEditClick] = useState(false);
  const [inputEdit, setInputEdit] = useState(title);

  const handleEdit = () => {
    handle(id, inputEdit);
    reset();
  };
  console.log("inputEdit", inputEdit);
  const reset = () => {
    setInputEdit(title);
    setEditClick(false);
  };
  const handleEditIcon = () => {
    setEditClick(true);
  };

  return (
    <div className="todoContainer">
      {editClick ? (
        <div className="editContainer">
          <input
            className="inputEdit"
            value={inputEdit}
            onChange={(e) => setInputEdit(e.target.value)}
          />
          <button className="buttonEdit" onClick={handleEdit}>
            V
          </button>
          <button className="buttonEdit" onClick={reset}>
            X
          </button>
        </div>
      ) : (
        <div>
          {title}
          <img
            className="icon"
            onClick={handleEditIcon}
            src={edit}
            alt="edit"
          />
          <img
            className="icon"
            onClick={() => handleDelete(id)}
            src={deleteIcon}
            alt="delete"
          />
        </div>
      )}
    </div>
  );
}

export default ToDo;
