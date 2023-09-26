import React from 'react'

const Input = ({ todo, setTodo, addTask }: ToDoInput) => {

    return (
        <div className="mx-8 text-center">
            <label className="block">
                <span className="block text-4xl font-medium text-slate-700 pb-6">Add new task:</span>
                <input
                    type="text"
                    placeholder="Type task ..."
                    className="border-gray border-2 rounded-md"
                    value={todo} onChange={(e) => { setTodo(e.target.value) }}
                />
                <button type="submit" className="ml-4" onClick={addTask}>Add</button>
            </label>
        </div>
    )
}

export default Input