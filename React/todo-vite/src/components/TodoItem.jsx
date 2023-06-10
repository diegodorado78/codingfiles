import React from 'react'

function TodoItem({todo,checkHandler}) {

   const { id, text, completed } = todo;
   const changeHandler = ()=>{
    checkHandler(id);
   }

  return (
    <li>
      {text}
      <input
        onChange={changeHandler}
        checked={completed}
        type="checkbox"
      />
    </li>
  );
}

export  {TodoItem}