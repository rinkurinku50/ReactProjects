import React from 'react';

const TodoItem = ({ title,setButtonClickDelete,setButtonClickEdit }) => {
    return ( 
    <li className="list-group-item shadow-lg rounded d-flex justify-content-between my-2">
     <h6 className="text-capitalize">{title}</h6>
     <div className="todo-icon">
         <span className= " mx-2 text-success">
          <i className="fa  fa-pencil" onClick={setButtonClickEdit} ></i>
         </span>
         <span className=" mx-2 text-danger">
          <i className="fa fa-trash" onClick={setButtonClickDelete}></i>
         </span>
     </div>
    </li>
     );
}
 
export default TodoItem;