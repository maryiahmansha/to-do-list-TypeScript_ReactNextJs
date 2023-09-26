"use client"
import ToDoList from "@/components/ToDoList"
import Input from "@/components/input"
import { useState } from "react"

export default function Home() {
  const [todo, setTodo] = useState<string>("")
  const [tasks, setTasks] = useState<ToDo[]>([])
  const [isChecked, setIsChecked] = useState(false)

  const addTask = () => {
    const newTodo: ToDo = { task: todo, id: crypto.randomUUID(), completed: isChecked };
    setTasks([...tasks, newTodo]);
    setTodo("");
  };

  const isCheckedHandler = (id: string) => {
    setIsChecked(!isChecked)
    const newTodos = tasks.map((task) => {
      if (task.id === id) {
        return (
          { ...task, completed: !task.completed }
        )
      }
      return task
    });
    setTasks(newTodos)
  }

  const deleteTask = (id: string) => {
    const newTaskList = tasks.filter((task) => task.id !== id)
    setTasks(newTaskList)
  }

  return (
    <main>
      <h1 className="font-bold text-7xl m-10 text-center">
        TO DO TASKS
      </h1>
      <Input todo={todo} setTodo={setTodo} addTask={addTask} />
      <div className="text-center m-5">
        <h2 className="underline underline-offset-1">
          List of tasks
        </h2>
        {tasks.map((task) => {
          return (
            <>
              <ToDoList
                id={task.id}
                completed={task.completed}
                task={task.task}
                isCheckedHandler={isCheckedHandler}
                deleteTask={deleteTask}
              />
            </>
          )
        })}
      </div>
    </main >
  )
}
