import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";


const initialStateTodos = [
  { id: 1, title: "Go to the gym", completed: true},
  { id: 2, title: "Study", completed: false},
  { id: 3, title: "Play ", completed: false},
  { id: 4, title: "Music", completed: false},
]


const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain bg-gray-200 min-h-screen ">

      <Header/>

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>

        <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>

        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>

        <TodoFilter/>
        
      </main>

      <footer className="text-center mt-8">drag & drop</footer>
    </div>
  );
};

export default App;