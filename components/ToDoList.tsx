import React from 'react'

const ToDoList = ({ task, id, completed, isCheckedHandler, deleteTask }: ToDoAndActions) => {
    return (
        <li key={id} className={"list-none " + (completed ? "line-through" : "")}>
            <label className="m-3">
                <input type="checkbox" onClick={() => isCheckedHandler(id)} />
            </label>
            {task}
            <button type="submit" className="ml-4" onClick={() => deleteTask(id)}>Remove</button>
        </li>

    )
}

export default ToDoList