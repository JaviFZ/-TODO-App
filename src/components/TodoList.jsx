
import TodoItem from "./TodoItem"


// {/* [&>article]:px-4   Asi decimos que todos los article que tenga dentro este div tienen px-4*/}
const TodoList = ({todos, removeTodo , updateTodo}) => {
    return (

        < div className="bg-white rounded-t-md [&>article]:px-4 mt-8" >
            
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
           
        </div >
    )
}

export default TodoList