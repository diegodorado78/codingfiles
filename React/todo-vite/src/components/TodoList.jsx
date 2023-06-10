import React from 'react'
import {TodoItem} from './TodoItem'
function TodoList({ todos, checkHandler }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkHandler={checkHandler} />
      ))}
    </ul>
  );
}

export  {TodoList}