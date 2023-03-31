
import TodoItem from "./TodoItem"
import CrossIcon from "./icons/CrossIcon"

// {/* [&>article]:px-4   Asi decimos que todos los article que tenga dentro este div tienen px-4*/}
const TodoList = () => {
    return (

        < div className="bg-white rounded-t-md [&>article]:px-4 mt-8" >
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

           
        </div >
    )
}

export default TodoList