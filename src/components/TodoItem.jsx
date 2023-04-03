import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo , removeTodo, updateTodo}) => {

    const {id, title, completed} = todo;

    return (
        <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">

            {/* <button className="rounded-full border-2 inline-block w-5 h-5 flex-none">  </button> */}
            <button className={`flex-none h-5 w-5 rounded-full border-2 ${ 
                completed ?
                'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center' 
                : 'inline-block'}`}
                onClick={()=> updateTodo(id)}>
                
                {completed && <IconCheck/>}
            </button>
            <p className={`text-gray-600 grow ${completed && 'line-through text-gray-300'}`}>{title}</p>
            <button className="flex-none" onClick={()=> removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    )
}

export default TodoItem