import CrossIcon from "./icons/CrossIcon"

const TodoItem = () => {
    return (
        <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">Completar curso javascript</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem