import { useRef, useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList.jsx";
import { v4 as uuidv4 } from "uuid";
const KEY = "todoApp.todos";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Workout 30 min", completed: false }
  ]);
  //useEffect para guardar los todos en el localstorage cada vez que se modifique el array todos
   useEffect(() => {
     const prevTodos = JSON.parse(localStorage.getItem(KEY)); //convierto el json a string para poderlo guardar en el localstorage
     if (prevTodos) {
       setTodos(prevTodos);
     }
   }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos)); //convierto el json a string para poderlo guardar en el localstorage
  }, [todos]);


  const todoRef = useRef(null);

  const addTodoHandler = () => {
    const todoText = todoRef.current.value;
    if (todoText === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), text: todoText, completed: false }];
    });
    todoRef.current.value = null;
  };
  const checkHandler = (id) => {
    const newTodos = [...todos];
    const completedTodo = newTodos.find((todo) => todo.id === id);
    completedTodo.completed = !completedTodo.completed;
    setTodos(newTodos);
  };
  const doneTodosCleaner = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  return (
    <>
      <div className="App">
        <h1>Todo App!</h1>
        <input
          ref={todoRef}
          type="text"
          placeholder="Inserta una nueva tarea"
        />
        <button onClick={addTodoHandler}>+</button>

        <TodoList todos={todos} checkHandler={checkHandler} />
        <h3 className="read-the-docs">
          Clear done todos
          <button onClick={doneTodosCleaner}>🗑</button>
        </h3>
        <div>
          Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
          terminar
        </div>
      </div>
    </>
  );
}

export default App;
