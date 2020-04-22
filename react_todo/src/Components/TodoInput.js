import React from "react";

const TodoInput = ({ itemValue,inputValue,submitMethod,editChanges}) => {
  return (
    <div className="card card-body shadow-lg">
      <form onSubmit={submitMethod}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fa fa-book"></i>
            </div>
          </div>
          <input
            className="form-control text-capitalize"
            type="text"
            placeholder="Add a Todo Item"
            onChange={inputValue}
            value={itemValue}
          />
        </div>
        <button type="submit"  className={editChanges ? "btn btn-block bg-success my-2 text-white":"btn btn-block bg-primary my-2 text-white"}>
        
        {editChanges ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
