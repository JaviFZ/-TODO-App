import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');
  
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if(!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmitAddTodo} className="flex items-center overflow-hidden 
                          rounded-md bg-white py-4 gap-4 px-4 ">
      {/* con inline-block transformamos un elemento de linea como es el span en uno de bloque
              para poder aplicarle alto y ancho */}
      <span className="rounded-full border-2 inline-block w-5 h-5 "></span>
      <input
        type='text'
        placeholder="Nueva Tarea"
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

 export default TodoCreate