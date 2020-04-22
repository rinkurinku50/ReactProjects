import React from 'react';
import TodoItem from './TodoItem'
const TodoList = ({ items,handleClearList,getId,editItem }) => {
  return ( 
  <ul className="list-group   my-5">
  <h3 className="text-center" >Todo List</h3>
  {
    items.map((item) => (
      <TodoItem   key={item.id} title={item.title} setButtonClickDelete={() => {getId(item.id)}}  setButtonClickEdit={() => {editItem(item.id)}} />
    ))
  }
  
  <button type="button" onClick={handleClearList} className="btn btn-block bg-danger text-white my-2">
  Clear List 
  </button>
  </ul>
     );
}
 
export default TodoList;