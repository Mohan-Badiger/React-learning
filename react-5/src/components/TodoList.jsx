const TodoList = ({ todos = [] }) => {
    return (
        <div className=" w-full mt-3">
            {todos.map((item, index) => {
                return (
                    <div key={index} className="bg-gray-300 mt-1 py-1 px-2 overflow-hidden">{item}</div>
                )
            })}
        </div>
    )
}

export default TodoList