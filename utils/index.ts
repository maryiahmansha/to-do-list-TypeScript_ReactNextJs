interface ToDo {
    task: string | undefined
    id: string
    completed: boolean
}

interface ToDoAndActions {
    task: string | undefined
    id: string
    completed: boolean
    isCheckedHandler: (id: string) => void
    deleteTask: (id: string) => void
}

interface ToDoInput {
    todo: string
    setTodo: (todo: string) => void
    addTask: () => void
}
